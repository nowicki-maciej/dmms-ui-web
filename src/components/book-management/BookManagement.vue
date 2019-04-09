<template>
  <div id="container">
    <h1>Book addition</h1>
    <b-form>
      <b-row>
        <b-col>
          <input-simple type="text"
                        required
                        placeholder="Title"
          />
          <input-simple type="text"
                        placeholder="ISBN"
          />
          <b-form-textarea v-model="book.description"
                           placeholder="Description"
                           rows="8"
          />
        </b-col>
        <b-col>
          <b-form-select v-model="selected"
                         :options="categories"
                         multiple
                         :select-size="4"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <tags-input v-model="book.authors"
                      :autocompleteSupplier="authorsSupplier"
                      :autocompleteSerializer="author => author.name + ' ' + author.surname"
                      :newValueCallback="newAuthor"
                      placeholder="Add authors"
          />
        </b-col>
      </b-row>
    </b-form>

  </div>
</template>

<script>
  import InputSimple from "../form/InputSimple";
  import TagsInput from "../form/TagsInput";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "BookManagement",
    components: { InputSimple, TagsInput },
    mixins: [HttpClient],
    data() {
      return {
        book: {
          description: '',
          authors: [],
        },
        categories: [
          { value: 'cat 1', text: 'This is First option' },
          { value: 'cat 2', text: 'Default Selected Option' },
          { value: 'cat 3', text: 'This is another option' },
        ],
      }
    },
    methods: {
      authorsSupplier: function () {
        return this.get("/authors");
      },
      newAuthor: function (text) {
        let parts = text.split(' ');

        let name = parts.slice(0, parts.length - 1).join(' ');
        let surname = parts[parts.length - 1];

        return {
          name,
          surname
        }
      },
    }
  }
</script>

<style scoped>

  #container {
    width: 70%;
    margin: 0 auto;
  }

</style>
