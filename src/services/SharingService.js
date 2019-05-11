import ApiClient from "./ApiClient";

export default class SharingService {

  static getAll() {
    return ApiClient.get('/sharing');
  }

  static createNewShare(share) {
    return ApiClient.post('/sharing', share);
  }

}
