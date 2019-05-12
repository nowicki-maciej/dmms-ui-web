import ApiClient from "./ApiClient";

export default class SharingInService {

  static getAll() {
    return ApiClient.get('/sharing/in');
  }

}
