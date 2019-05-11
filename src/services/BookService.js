import ApiClient from "./ApiClient";

export default class BookService {

  static getAll() {
    return ApiClient.get('/books');
  }

}
