<template>
  <div>
    <h2>{{ book.title }}</h2>
    <prop-detail-table :rows="rows" :book="book" />

  </div>
</template>

<script>
  import PropDetailTable from "../prop-detail-table/PropDetailTable";
  import BookService from "../../services/BookService";

  export default {
    name: "BookDetails",
    components: { PropDetailTable },
    data() {
      return {
        book: {
          authors: [],
          categories: [],
          //TODO: implement tags
          // tags: [],
        },
        user: {
          name: "Admin"
        },
      }
    },
    computed: {
      rows() {
        return [
          { prop: 'Author', detail: this.formatAuthors() },
          { prop: 'Category', detail: this.formatCategories() },
          { prop: 'Owner', detail: this.user.name },
          { prop: 'Description', detail: this.book.description },
          { prop: 'ISBN', detail: this.book.isbn },
          //TODO: implement tags
          // { prop: 'Tags', detail: this.book.tags.join(", ") },
        ];
      }
    },
    methods: {
      formatAuthors: function () {
        return this.book.authors.map(author => author.name + ' ' + author.surname).join(', ');
      },
      formatCategories: function () {
        return this.book.categories.map(category => category.name).join(', ');
      }
    },
    mounted() {
      const vm = this;

      BookService.get(this.$route.params.bookId)
        .then(response => {
          vm.book = response.data;
        });
    }
  }
</script>

<style scoped>

</style>
