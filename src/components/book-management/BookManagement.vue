<template>

  <div id="container">

    <b-container>
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
            <!--<textarea>Opis</textarea>-->
          </b-col>
          <b-col>
            <b-form-select v-model="selected"
                           :options="categories"
                           multiple
                           :select-size="4">
            </b-form-select>


          </b-col>
        </b-row>
      </b-form>
    </b-container>

    <vue-bootstrap-typeahead
      :data="authors"
      v-model="selectedAuthor"
      size="lg"
      :serializer="s => s.firstName + ' ' + s.lastName"
      placeholder="Author"
      @hit="onHit"
      @keyup.enter.native="onEnter"
    />


  </div>

</template>

<script>
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
  import InputSimple from "../form/InputSimple";

  export default {
    name: "BookManagement",
    components: { InputSimple, VueBootstrapTypeahead },
    data() {
      return {
        selectedAuthor: '',
        selectedAuthors: [],
        selected: [],
        categories: [
          { value: 'cat 1', text: 'This is First option' },
          { value: 'cat 2', text: 'Default Selected Option' },
          { value: 'cat 3', text: 'This is another option' },
        ],
        authors: [
          { id: 1, firstName: 'J.R.R.', lastName: 'Tolkien' },
          { id: 2, firstName: 'Jacek', lastName: 'Piekara' },
          { id: 3, firstName: 'Jarosław', lastName: 'Grzędowicz' },
          { id: 4, firstName: 'Steven', lastName: 'Hawking' },
        ]
      }
    },
    methods: {
      onEnter: function () {
        let parts = this.splitAuthor(this.selectedAuthor);
        this.selectedAuthors.push({ id: null, firstName: parts[0], lastName: parts[1] })
        console.log(this.selectedAuthor);
        console.log(this.selectedAuthors);
        this.selectedAuthor = '';
        console.log(this.selectedAuthor.length);
      },
      onHit: function () {

        console.log(this.selectedAuthor);
      },
      splitAuthor: function (string) {
        let parts = string.split(' ');
        if (parts.length > 2) {
          let out = [];
          let name = '';
          let i;
          for (i = 0; i < parts.length - 1; i++) {
            name.concat(parts[i]);
          }
          out.push(name);
          out.push(parts[parts.length - 1]);
          return out;
        }
        return parts;
      }
    }
  }
</script>

<style scoped>

  #container {
    width: 70%;
    margin: 0 auto;
  }

</style>
