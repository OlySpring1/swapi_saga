import axios from 'axios';
const API = 'https://swapi.dev/api/people/';

export default axios.create({
  baseURL: API
});