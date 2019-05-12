<template>
    <shared-to-me-list :books="books"/>
</template>

<script>

  import SharedToMeList from "./SharedToMeList";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "SharedToMe",
    mixins: [HttpClient],
    components: { SharedToMeList },
    data() {
      return {
        books: [],
      };
    },
    mounted() {
      const vm = this;

      this.get("/sharing/in")
        .then(response => {
          let data = response.data;

          vm.books = data.map(share => {
            return {
              ...share.book,
              owner: share.owner
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
