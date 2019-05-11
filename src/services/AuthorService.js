import ApiClient from "./ApiClient";

export default class AuthorService {

  static getAll() {
    return ApiClient.get('/authors');
  }

}
