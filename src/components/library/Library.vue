<template>
  <div>
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

</style>
