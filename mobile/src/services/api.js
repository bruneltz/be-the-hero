import axios from 'axios';

const api = axios.create({
  baseURL: 'http://186.223.229.173:3333'
});

export default api;