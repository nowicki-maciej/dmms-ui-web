import axios from 'axios';

function pathFrom(path) {
  return "/api" + path;
}

export default {
  methods: {
    get: function (path) {
      return axios.get(pathFrom(path));
    },
    post: function (path, payload) {
      return axios.post(pathFrom(path), payload);
    },
    delete: function (path) {
      return axios.delete(pathFrom(path));
    }
  }
};
