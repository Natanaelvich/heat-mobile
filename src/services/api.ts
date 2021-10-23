import axios from 'axios';

const { API_URL_LOCAL } = process.env;

export const api = axios.create({
  baseURL: API_URL_LOCAL,
});