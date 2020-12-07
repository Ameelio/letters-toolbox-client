import { loginRequest, loginToken } from '../utils/helper';

const authProvider = {
  login: ({ username, password }) => {
    const query = {
      email: username,
      password: password
    };

    return loginRequest(query)
      .then(login_data => {
        localStorage.setItem('token', login_data.token);
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
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
