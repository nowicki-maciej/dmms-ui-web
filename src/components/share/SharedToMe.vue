<template>
    <shared-to-me-list :books="books"/>
</template>

<script>

  import SharedToMeList from "./SharedToMeList";
  import SharingInService from "../../services/SharingInService";

  export default {
    name: "SharedToMe",
    components: { SharedToMeList },
    data() {
      return {
        books: [],
      };
    },
    methods: {
      formatDownloadLink: function(share) {
        if (share.server.toLowerCase() === 'local') {
          return (bookId, format) => `/api/books/${bookId}/${format}`;
        } else {
          return (bookId, format) => `https://dev.atreses.pl/api/books/${bookId}/${format}`;
        }
      }
    },
    mounted() {
      const vm = this;

      SharingInService.getAll()
        .then(response => {
          let data = response.data;

          vm.books = data.map(share => {
            return {
              ...share.book,
              owner: share.owner,
              server: share.server,
              downloadLink: this.formatDownloadLink(share),
            }
          })
        })
        .catch(() => {
        })
    },
  }
</script>

<style scoped>

</style>
