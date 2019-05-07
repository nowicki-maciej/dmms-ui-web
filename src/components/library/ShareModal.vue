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

  export default {
    name: "ShareModal",
    components: { InputSimple },
    props: ['bookId'],
    data() {
      return {
        username: '',
      }
    },
    methods: {
      shareBook: function () {
        //TODO API CALL
        console.log("Sharing book book of ID to user", this.bookId, this.username);
        this.username = '';
      }
    },
  }
</script>

<style scoped>

</style>
