<template>
  <shared-to-others-list :books="books"/>
</template>

<script>
  import SharedToOthersList from "./SharedToOthersList";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "SharedToOthers",
    mixins: [HttpClient],
    components: { SharedToOthersList },
    data() {
      return {
        books: [],
      };
    },
    mounted() {
      const vm = this;

      this.get("/sharing")
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
