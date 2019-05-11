<template>
  <div>
    <b-button id="btn-add-book" variant="success" @click="$router.push('/library/book/new')">
      <font-awesome-icon icon="book-medical"/>
      Add new book
    </b-button>

    <book-list @share="shareBook" :books="books"/>

    <share-modal :book-id="shareBookId"/>
  </div>
</template>

<script>
  import BookList from "./BookList";
  import HttpClient from "../../helpers/HttpClient";
  import ShareModal from "./ShareModal";

  export default {
    name: "Library",
    mixins: [HttpClient],
    components: { BookList, ShareModal },
    data() {
      return {
        // books: [],
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
