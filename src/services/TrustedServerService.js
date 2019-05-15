import ApiClient from "./ApiClient";

export default class TrustedServerService {

  static getAll() {
    return ApiClient.get('/servers');
  }

  static addNewServer(server) {
    return ApiClient.post('/servers', server);
  }

}
