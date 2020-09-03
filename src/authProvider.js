
const authProvider = {
  login: ({ username, password }) => {
    const query = {
      email: username,
      password: password
    };
    const request = new Request('https://letters-api-staging.ameelio.org/api/login', {
      method: 'POST',
      body: JSON.stringify(query),
      headers: new Headers({ 'Content-Type': 'application/json'}),
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        // console.log(response);
        return response.json();
      })
      .then( response => {//({ token }) => {
        const token = response.data.token
        localStorage.setItem('token', token);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
