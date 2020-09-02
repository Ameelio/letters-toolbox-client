
export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const query = {
      email: username,
      password: password
    };
    const request = new Request('https://letters-api-staging.ameelio.org/api/login', {
      method: 'POST',
      body: JSON.stringify(query),
      headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json'}),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then( ({ token }) => {
        localStorage.setItem('token', token);
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
