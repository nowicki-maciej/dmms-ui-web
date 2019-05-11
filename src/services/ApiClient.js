import axios from "axios";

function pathFrom(path) {
  return "/api" + path;
}

export default class ApiClient {

  static get(path) {
    return axios.get(pathFrom(path));
  }

  static post(path, payload) {
    return axios.post(pathFrom(path), payload);
  }

  static delete(path) {
    return axios.delete(pathFrom(path));
  }

  static put(path, payload) {
    return axios.put(pathFrom(path), payload);
  }

};
