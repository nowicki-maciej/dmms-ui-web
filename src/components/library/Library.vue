<template>
  <div>
    <b-button id="btn-add-book" variant="success" @click="$router.push('/library/book/new')">
      <font-awesome-icon icon="book-medical"/>
      Add new book
    </b-button>

    <book-list :books="books" />
  </div>
</template>

<script>
  import BookList from "./BookList";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "Library",
    mixins: [HttpClient],
    components: { BookList },
    data() {
      return {
        books: [],
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
