<template>
  <shared-to-others-list :books="books"/>
</template>

<script>
  import SharedToOthersList from "./SharedToOthersList";
  import SharingService from "../../services/SharingService";

  export default {
    name: "SharedToOthers",
    components: { SharedToOthersList },
    data() {
      return {
        books: [],
      };
    },
    mounted() {
      const vm = this;

      SharingService.getAll()
        .then(response => {
          let data = response.data;

          vm.books = data.map(share => {
            return {
              ...share.book,
              receiver: share.receiver
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
