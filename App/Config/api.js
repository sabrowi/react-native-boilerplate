import axios from 'axios';
import {API_URL} from './app';

/* Axios initialize */
const api = axios.create({
  baseURL: API_URL,
});

/* Token */
let token = null;

/* Axios Header */
const authHeader = () => {
  if (token) {
    return {headers: {Authorization: 'Bearer ' + token}};
  } else {
    return {};
  }
};

/* Axios Response */
const responseBody = response => response.data;

/* Axios Method */
const requests = {
  get: url => api.get(url, authHeader()).then(responseBody),
  post: (url, params) => api.post(url, params, authHeader()).then(responseBody),
  put: (url, params) => api.put(url, params, authHeader()).then(responseBody),
  delete: url => api.delete(url).then(responseBody),
};

/* Api Call */
const Auth = {
  login: data => requests.post('login', data),
};

export default {
  Auth,
  setToken: _token => {
    token = _token;
  },
};
