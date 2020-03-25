import axios from "axios";

export default axios.create({
  // Base api url
  baseURL: 'https://corona.lmao.ninja'
});