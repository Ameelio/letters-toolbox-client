import { loginRequest } from '../utils/helper';

const authProvider = {
  login: ({ username, password }) => {
    const query = {
      email: username,
      password: password
    };

    return loginRequest(query)
      .then(login_data => {
        localStorage.setItem('token', login_data.token);
        localStorage.setItem('token_expires', login_data.api_token_expires);
      });
  },

  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    if (localStorage.getItem('token')) {
      const current = new Date();
      const expires = new Date(localStorage.getItem('token_expires'));
      return (expires && current.getTime() < expires) ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
