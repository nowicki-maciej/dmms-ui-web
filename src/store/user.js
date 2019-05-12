import BookService from "../services/BookService";
import UserService from "../services/UserService";

export const userModule = {
  state: {
    id: null,
    role: null,
    login: '',
    displayName: '',

    books: [],
  },
  mutations: {
    setUserDetails(state, userDetails) {
      state.id = userDetails.id;
      state.role = userDetails.role;
      state.login = userDetails.login;
      state.displayName = userDetails.displayName;
    },
    setBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    login({ commit }, loginDetails) {
      return UserService.login(loginDetails)
        .then(response => {
          commit('setUserDetails', response.data);
        });
    },
    loadCurrent({ commit }) {
      return UserService.current()
        .then(response => {
          commit('setUserDetails', response.data);

          return response;
        });
    },
    fetchAllBooks({ commit }) {
      return BookService.getAll()
        .then(response => {
          commit('setBooks', response.data);
        });
    },
  }
};
