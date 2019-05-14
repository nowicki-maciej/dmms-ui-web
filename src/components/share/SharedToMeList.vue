<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="books">

      <span slot="authors" slot-scope="data" v-html="data.value"></span>

      <template slot="formats" slot-scope="row">
        <download-buttons :book="row.item"/>
      </template>

    </b-table>
  </div>
</template>

<script>
  import DownloadButtons from "../DownloadButtons";

  export default {
    name: "SharedToMeList",
    components: { DownloadButtons },
    props: ['books'],
    data() {
      return {
        fields: [
          { key: 'title', label: 'Title' },
          { key: 'authors', label: 'Author', formatter: 'formatAuthors' },
          { key: 'categories', label: 'Category', formatter: 'formatCategories' },
          { key: 'formats', label: 'Formats' },
          { key: 'owner', label: 'Owner' },
          { key: 'server', label: 'Server' },
        ],
      }
    },
    methods: {
      formatAuthors: function (authors) {
        console.log("Books: ", this.books);
        return authors.map(author => author.name + ' ' + author.surname)
          .join("<br>");
      },
      formatCategories: function (categories) {
        return categories.map(category => category.name)
          .join(", ");
      },
    }
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
