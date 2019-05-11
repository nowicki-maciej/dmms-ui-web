import ApiClient from "./ApiClient";

export default class UserService {

  static login(loginDetails) {
   return ApiClient.post('/user-management/login', loginDetails);
  }

}
