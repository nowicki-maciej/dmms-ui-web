<template>
  <b-modal id="share-modal"
           centered
           title="Share book"
           style="color: black"
           size="lg"
           @ok="shareBook">

    <b-form>
      <input-simple type="text"
                    v-model="username"
                    required
                    placeholder="Username"
      />
    </b-form>

  </b-modal>
</template>

<script>
  import InputSimple from "../form/InputSimple";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "ShareModal",
    mixins: [HttpClient],
    components: { InputSimple },
    props: ['bookId'],
    data() {
      return {
        username: '',
      }
    },
    methods: {
      shareBook: function () {
        this.post("/sharing", { receiver: this.username, booksId: [this.bookId] })
          .then(() => {
            alert("Shared!");
          })
          .catch(() => {
            alert("Not shared!");
          });

        console.log("Sharing book book of ID to user", this.bookId, this.username);
        this.this.username = '';
      }
    },
  }
</script>

<style scoped>

</style>
