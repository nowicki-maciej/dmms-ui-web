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
        books: [
          // {
          //   id: 1,
          //   title: "Tytuł",
          //   isbn: "123456",
          //   description: "Opis książki",
          //   authors: [{ name: "Jan", surname: "Kowalski", id: 1 }],
          //   categories: [{ name: "Fantastyka", id: 4 }],
          //   formats: ["PDF"],
          //   owner: 'test'
          // },
          // {
          //   id: 3,
          //   title: "Tytuł 123",
          //   isbn: "837563478",
          //   description: "sdkjfnsdjf",
          //   authors: [{ name: "Jan", surname: "Kowalski", id: 1 }],
          //   categories: [{ name: "Historia", id: 7 }],
          //   formats: ["MOBI", "PDF"],
          //   owner: 'admin'
          // },
        ],
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
