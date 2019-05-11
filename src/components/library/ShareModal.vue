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
  import SharingService from "../../services/SharingService";

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
        const vm = this;

        SharingService.createNewShare({ receiver: this.username, booksId: [this.bookId] })
          .then(() => {
            vm.nSuccess('Book was shared successfully');
          })
          .catch(() => {
            vm.nError('Failed to share the book');
          });

        this.this.username = '';
      }
    },
  }
</script>

<style scoped>

</style>
