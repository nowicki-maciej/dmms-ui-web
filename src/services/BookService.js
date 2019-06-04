import ApiClient from "./ApiClient";

export default class BookService {

  static getAll() {
    return ApiClient.get('/books');
  }

  static get(bookId) {
    return ApiClient.get(`/books/${bookId}`);
  }

  static createNewBook(book) {
    return ApiClient.post('/books', book);
  }

  static update(book) {
    return ApiClient.put(`/books/${book.id}`, book);
  }

  static delete(bookId) {
    return ApiClient.delete(`/books/${bookId}`);
  }

}
