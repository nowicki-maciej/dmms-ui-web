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
