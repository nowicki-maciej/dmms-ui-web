<template>
  <div>
    <h2>{{ book.title }}</h2>
    <prop-detail-table :rows="rows" :book="book"/>

    <b-button id="btn-edit-book" variant="success" v-b-modal.book-edit-modal>
      <font-awesome-icon icon="book"/>
      Edit book
    </b-button>

    <b-modal id="book-edit-modal"
             centered
             title="Edit book"
             style="color: black"
             size="lg"
             @ok="editBook">
      <b-form>
        <b-row>
          <b-col>
            <input-simple type="text"
                          v-model="formBook.title"
                          required
                          placeholder="Title"
            />
            <input-simple type="text"
                          v-model="formBook.isbn"
                          placeholder="ISBN"
            />
<!--            <tags-input v-model="formBook.authors"-->
<!--                        :autocompleteSupplier="authorsSupplier"-->
<!--                        :autocompleteSerializer="author => author.name + ' ' + author.surname"-->
<!--                        :newValueCallback="newAuthor"-->
<!--                        placeholder="Add authors"-->
<!--            />-->
          </b-col>
<!--          <b-col>-->
<!--            <b-form-select v-model="formBook.categories"-->
<!--                           :options="categories"-->
<!--                           multiple-->
<!--                           :select-size="6"/>-->
<!--          </b-col>-->
        </b-row>
        <b-row>
          <b-col>
            <b-form-textarea v-model="formBook.description"
                             placeholder="Description"
                             rows="8"
            />
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
  import PropDetailTable from "../prop-detail-table/PropDetailTable";
  import BookService from "../../services/BookService";
  import InputSimple from "../form/InputSimple";
  import TagsInput from "../form/TagsInput";

  export default {
    name: "BookDetails",
    components: { PropDetailTable, InputSimple, TagsInput },
    data() {
      return {
        book: {
          authors: [],
          categories: [],
          //TODO: implement tags
          // tags: [],
        },
        user: this.$store.state.user,
      }
    },
    computed: {
      rows() {
        return [
          { prop: 'Author', detail: this.formatAuthors() },
          { prop: 'Category', detail: this.formatCategories() },
          { prop: 'Owner', detail: this.user.displayName },
          { prop: 'Description', detail: this.book.description },
          { prop: 'ISBN', detail: this.book.isbn },
          //TODO: implement tags
          // { prop: 'Tags', detail: this.book.tags.join(", ") },
        ];
      },
      formBook() {
        return Object.assign({}, this.book);
      },
    },
    methods: {
      formatAuthors: function () {
        return this.book.authors.map(author => author.name + ' ' + author.surname).join(', ');
      },
      formatCategories: function () {
        return this.book.categories.map(category => category.name).join(', ');
      },
      editBook: function() {
        const vm = this;

        let payload = {
          ...this.formBook,
          authors: [],
          categories: [],
        };

        BookService.update(payload)
          .then(response => {
            vm.book = response.data;
            vm.nSuccess("Book edited.");
          })
          .catch(() => {
            vm.nError("Failed to edit book.");
          })
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
