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
      <input-dropdown placeholder="-- Server --"
                      :options="servers"
                      v-model="server"
      />
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from "../form/InputSimple";
  import SharingService from "../../services/SharingService";
  import InputDropdown from "../form/InputDropdown";
  import TrustedServerService from "../../services/TrustedServerService";

  export default {
    name: "ShareModal",
    components: { InputDropdown, InputSimple },
    props: ['bookId'],
    data() {
      return {
        username: '',
        server: null,
        servers: [],
      }
    },
    mounted() {
      const vm = this;

      TrustedServerService.getAll()
        .then(response => {
          vm.servers = [
            { value: '-1', text: 'localhost' },
            ...response.data.map(element => {
              return { value: element.assignedId, text: element.ipAddress }
            })
          ];


          console.log("Servers: ", vm.servers);
        })
        .catch(() => vm.nError('Failed to fetch trusted servers. Please try again later.'));
    },
    methods: {
      shareBook: function () {
        const vm = this;

        SharingService.createNewShare({ receiver: this.username, receiverServer: this.server, booksId: [this.bookId] })
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
