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


    <vue-autosuggest
      :suggestions="[{data:authors}]"
      :input-props="{id:'autosuggest__input', onInputChange: onInputChange, placeholder:'Authors'}"
      @selected="selectHandler"
    >
      <template slot-scope="{suggestion}">
        <span class="my-suggestion-item">{{suggestion.item}}</span>
      </template>
    </vue-autosuggest>

  </div>

</template>

<script>
  import { VueAutosuggest } from 'vue-autosuggest';
  import InputSimple from "../form/InputSimple";

  export default {
    name: "BookManagement",
    components: { InputSimple, VueAutosuggest },
    data() {
      return {
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
        // authors: [
        //   'Tolkien',
        //   'Piekara',
        //   'Grzędowicz',
        //   'Hawking',
        // ]
      }
    },
    methods: {
      selectHandler: function (item, item2) {
        console.log(item, item2);
      },
      onInputChange: function (item) {
        console.log(item);
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
