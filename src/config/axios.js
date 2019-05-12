import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import router from "../router";

Vue.use(VueAxios, axios);

Vue.axios.interceptors.response.use((response) => { // intercept the global error
  return response
}, function (error) {
  let originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) { // if the error is 401 and hasent already been retried
    originalRequest._retry = true; // now it can be retried

    router.push('/');
  }

  return Promise.reject(error)
});
