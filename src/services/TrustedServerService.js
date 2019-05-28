import ApiClient from "./ApiClient";

export default class TrustedServerService {

  static getAll() {
    //{ ipAddress, assignedId, serverType, isAccepted } //for now
    return ApiClient.get('/servers');
  }

  static addNewServer(server) {
    return ApiClient.post('/servers', server);
  }

  static acceptServer(serverId) {
    return ApiClient.get(`/servers/${serverId}/accept`);
  }

  static denyServer(serverId) {
    return ApiClient.get(`/servers/${serverId}/reject`);
  }
}
