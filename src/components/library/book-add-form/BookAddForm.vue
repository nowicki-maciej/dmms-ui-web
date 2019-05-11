<template>
  <div id="container">
    <h1>Book addition</h1>
    <b-form>
      <b-row>
        <b-col>
          <input-simple type="text"
                        v-model="book.title"
                        required
                        placeholder="Title"
          />
          <input-simple type="text"
                        v-model="book.isbn"
                        placeholder="ISBN"
          />
          <tags-input v-model="book.authors"
                      :autocompleteSupplier="authorsSupplier"
                      :autocompleteSerializer="author => author.name + ' ' + author.surname"
                      :newValueCallback="newAuthor"
                      placeholder="Add authors"
          />
        </b-col>
        <b-col>
          <b-form-select v-model="book.categories"
                         :options="categories"
                         multiple
                         :select-size="6"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-textarea v-model="book.description"
                           placeholder="Description"
                           rows="8"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-file
            style="margin-top: 15px;"
            v-model="files"
            :state="Boolean(files)"
            placeholder="Choose files..."
            drop-placeholder="Drop files here..."
            accept=".pdf, .mobi, .epub"
            multiple
          ></b-form-file>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button variant="primary"
                    style="margin-top: 20px;"
                    @click="submitBook">
            Add book
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
  import InputSimple from "../../form/InputSimple";
  import TagsInput from "../../form/TagsInput";
  import axios from 'axios/index';
  import CategoryService from "../../../services/CategoryService";
  import AuthorService from "../../../services/AuthorService";
  import BookService from "../../../services/BookService";

  export default {
    name: "BookAddForm",
    components: { InputSimple, TagsInput },
    data() {
      return {
        book: {
          title: '',
          isbn: '',
          description: '',
          authors: [],
          categories: [],
        },
        authors: [],
        categories: [],
        files: [],
      }
    },
    methods: {
      authorsSupplier: function () {
        return AuthorService.getAll();
      },
      fetchCategories: function () {
        const vm = this;

        CategoryService.getAll()
          .then(response => {
            vm.categories = response.data.map(cat => {
              return {
                value: cat.id,
                text: cat.name,
              }
            });
          })
      },
      newAuthor: function (text) {
        let parts = text.split(' ');

        let name = parts.slice(0, parts.length - 1).join(' ');
        let surname = parts[parts.length - 1];

        return { name, surname };
      },
      submitBook: function () {
        this.$store.commit('appLoading', true);
        const vm = this;

        let absentAuthors = this.book.authors.filter(author => author.id === undefined);
        let presentAuthors = this.book.authors.filter(author => author.id !== undefined)
          .map(author => author.id);

        let calls = this.submitAuthors(absentAuthors);

        axios.all(calls)
          .then((responses) => {
            presentAuthors.push(...responses.map(response => response.data.id));

            let formData = new FormData();

            formData.append("book", JSON.stringify({
              ...this.book,
              authors: presentAuthors
            }));

            for (let file of this.files) {
              formData.append("file[]", file);
            }

            BookService.createNewBook(formData)
              .then(() => {
                vm.$router.push('/library');
                vm.nSuccess('Adding book successful');
              })
              .catch(() => {
                vm.nError('Failed to create book resource.');
              })
              .finally(() => {
                vm.$store.commit('appLoading', false);
              })
          });
      },
      submitAuthors: function (authors) {
        if (!Array.isArray(authors)) {
          return false;
        }

        const vm = this;

        return authors.map(author => {
          return vm.post('/authors', author);
        });
      },
    },
    mounted() {
      this.fetchCategories();
    }
  }
</script>

<style scoped>

</style>
