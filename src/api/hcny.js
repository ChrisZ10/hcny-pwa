import axios from 'axios';

export default axios.create({
  baseURL: 'https://hcny-mobile-server.herokuapp.com'
});