import ApiClient from "./ApiClient";

export default class UserService {

  static login(loginDetails) {
   return ApiClient.post('/user-management/login', loginDetails);
  }

  static logout() {
    return ApiClient.post('/user-management/logout');
  }

  static current() {
    return ApiClient.get('/users/current')
  }

  static getAll() {
    return ApiClient.get('/users');
  }

  static addNewUser(user) {
    return ApiClient.post('/users', user);
  }

  static deleteUser(id) {
    return ApiClient.delete(`/users/${id}`);
  }

  static changeUserRole(id, role) {
    return ApiClient.put('/users/role', { id, role })
  }

}
