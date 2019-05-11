import ApiClient from "./ApiClient";

export default class CategoryService {

  static getAll() {
    return ApiClient.get('/categories');
  }

  static addNewCategory(category) {
    return ApiClient.post('/categories', category);
  }

  static deleteCategory(id) {
    return ApiClient.delete(`/categories/${id}`);
  }

}
