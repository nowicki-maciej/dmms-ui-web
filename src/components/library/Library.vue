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
        books: [],
        shareBookId: -1,
      }
    },
    mounted: function () {
      this.refreshBookList();
    },
    methods: {
      refreshBookList: function () {
        const vm = this;
        this.$store.commit('appLoading', true);

        this.get("/books")
          .then(response => {
            vm.books = response.data;
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
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
