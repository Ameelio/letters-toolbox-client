import { loginRequest } from "../utils/helper";

const authProvider = {
  login: ({ username, password }) => {
    const query = {
      email: username,
      password: password,
    };

    return loginRequest(query)
      .then((login_data) => {
        localStorage.setItem("token", login_data.token);
      })
      .catch((err) => console.log("[Auth] Login error", err));
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    if (localStorage.getItem("token")) {
      return Promise.resolve();
    }
    return Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
