<template>
  <shared-to-others-list :books="books"/>
</template>

<script>
  import SharedToOthersList from "./SharedToOthersList";

  export default {
    name: "SharedToOthers",
    components: { SharedToOthersList },
    data() {
      return {
        books: [
          {
            id: 1,
            title: "Tytuł",
            isbn: "123456",
            description: "Opis książki",
            authors: [{ name: "Jan", surname: "Kowalski", id: 1 }],
            categories: [{ name: "Fantastyka", id: 4 }],
            formats: ["PDF"],
            receiver: 'test'
          },
          {
            id: 3,
            title: "Tytuł 123",
            isbn: "837563478",
            description: "sdkjfnsdjf",
            authors: [{ name: "Jan", surname: "Kowalski", id: 1 }],
            categories: [{ name: "Historia", id: 7 }],
            formats: ["MOBI", "PDF"],
            receiver: 'admin'
          },
        ],
      };
    },
    mounted() {
      //TODO: api call for books
    },
  }
</script>

<style scoped>

</style>
