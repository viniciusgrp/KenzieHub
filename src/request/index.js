import axios from "axios";


const Api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    timeout: 5000,
});
  
Api.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default Api