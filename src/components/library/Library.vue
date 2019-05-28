<template>
  <div>
    <b-button id="btn-add-book" variant="success" @click="$router.push('/library/book/new')">
      <font-awesome-icon icon="book-medical"/>
      Add new book
    </b-button>

    <book-list @share="shareBook" @delete="deleteBook" :books="books"/>

    <share-modal :book-id="shareBookId"/>
  </div>
</template>

<script>
  import BookList from "./BookList";
  import ShareModal from "./ShareModal";
  import BookService from "../../services/BookService";

  export default {
    name: "Library",
    components: { BookList, ShareModal },
    data() {
      return {
        shareBookId: -1,
      }
    },
    computed: {
      books: function () {
        return this.$store.state.user.books;
      }
    },
    mounted: function () {
      this.refreshBookList();
    },
    methods: {
      refreshBookList: function () {
        const vm = this;

        this.$store.dispatch('user/fetchAllBooks')
          .catch(() => {
            vm.nError("Failed to fetch books.");
          });
      },
      shareBook: function (bookId) {
        this.shareBookId = bookId;
      },
      deleteBook: function (bookId) {
        const vm = this;

        BookService.delete(bookId)
          .then(() => {
            vm.nSuccess('Book deleted.');
            vm.refreshBookList();
          })
          .catch(() => vm.nError('Failed to delete book.'));
      }
    }
  }
</script>

<style scoped>
  #btn-add-book {
    margin-bottom: 10px;
    float: right;
    clear: both;
  }
</style>
