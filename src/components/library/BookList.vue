<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             @row-clicked="onRowClicked"
             :fields="fields"
             :items="books">

      <span slot="authors" slot-scope="data" v-html="data.value"></span>

      <template slot="formats" slot-scope="row">
        <download-buttons :book="row.item"/>
      </template>

      <template slot="action" slot-scope="data">
        <b-button class="action">
          <font-awesome-icon icon="cloud-download-alt"/>
        </b-button>
        <b-button class="action">
          <font-awesome-icon icon="ellipsis-h"/>
        </b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
  import DownloadButtons from "../DownloadButtons";

  export default {
    name: "BookList",
    components: { DownloadButtons },
    props: ['books'],
    data() {
      return {
        fields: [
          { key: 'title', label: 'Title' },
          { key: 'authors', label: 'Author', formatter: 'formatAuthors' },
          { key: 'categories', label: 'Category', formatter: 'formatCategories' },
          { key: 'formats', label: 'Formats' },
          { key: 'action', label: 'Actions' },
        ],
      }
    },
    methods: {
      formatAuthors: function (authors) {
        return authors.map(author => author.name + ' ' + author.surname)
          .join("<br>");
      },
      formatCategories: function (categories) {
        return categories.map(category => category.name)
          .join(", ");
      },
      onRowClicked: function (item) {
        this.$router.push("/library/book/" + item.id)
      }
    }
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }

  .action {
    background-color: #085394;
  }
</style>
