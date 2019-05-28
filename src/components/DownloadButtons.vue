<template>
  <div>
    <template v-for="format in book.formats">
      <a :href="bookLink(book.id, format)" download>
        <b-button :class="formatClassName(format)">{{ format.toUpperCase() }}</b-button>
      </a>
    </template>
  </div>
</template>

<script>
  export default {
    name: "DownloadButtons",
    props: ['book', 'link'],
    methods: {
      formatClassName: function (format) {
        return 'format format-' + format.toLowerCase();
      },
      bookLink: function(bookId, format) {
        return this.link ? this.link(bookId, format) : '/api/books/' + bookId + '/' + format;
      }
    },
  }
</script>

<style scoped>
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
