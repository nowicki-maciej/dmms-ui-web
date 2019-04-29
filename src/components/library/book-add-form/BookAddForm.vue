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
  import HttpClient from "../../../helpers/HttpClient";
  import axios from 'axios/index';

  export default {
    name: "BookAddForm",
    components: { InputSimple, TagsInput },
    mixins: [HttpClient],
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
        return this.get("/authors");
      },
      fetchCategories: function () {
        const vm = this;

        this.get("/categories")
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

            this.post("/books", formData)
              .then(() => {
                vm.$store.commit('appLoading', false);
                vm.$router.push('/library');
              });
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

  #container {
    /*width: 70%;*/
    /*margin: 0 auto;*/
  }

</style>
