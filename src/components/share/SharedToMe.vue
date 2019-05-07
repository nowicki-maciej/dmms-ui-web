<template>
  <book-list books="books"/>
</template>

<script>
  import BookList from "../library/BookList";

  export default {
    name: "SharedToMe",
    components: { BookList },
    data() {
      return {
        books: [],
      };
    },
    mounted() {
      //TODO: api call for books
      this.books = [];
    },
  }
</script>

<style scoped>

</style>
