<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="books">

      <span slot="authors" slot-scope="data" v-html="data.value"></span>

      <template slot="formats" slot-scope="data">
        <template v-for="format of data.value">
          <b-button :class="formatClassName(format)">{{ format.toUpperCase() }}</b-button>
        </template>
      </template>

      <template slot="action" slot-scope="data">
        <b-button class="action"><font-awesome-icon icon="cloud-download-alt"/></b-button>
        <b-button class="action"><font-awesome-icon icon="ellipsis-h"/></b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
  export default {
    name: "BookList",
    props: ['books'],
    data() {
      return {
        fields: [
          { key: 'title', label: 'Tytuł' },
          { key: 'authors', label: 'Autor', formatter: 'formatAuthors' },
          { key: 'categories', label: 'Gatunek', formatter: 'formatCategories' },
          { key: 'formats', label: 'Formaty' },
          { key: 'action', label: 'Akcje' },
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
      formatClassName: function (format) {
        return 'format format-' + format.toLowerCase();
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

  .format {
    color: black;
    margin: 0 5px;
  }

  .format-pdf {
    background-color: #ea9999;
  }

  .format-epub {
    background-color: #f9cb9c;
  }

  .format-mobi {
    background-color: #b4a7d6;
  }
</style>
