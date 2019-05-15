<template>
  <div>
    <div id="container-btn-add-server">
      <b-button id="btn-add-server" variant="success" v-b-modal.new-server-modal>
        <font-awesome-icon icon="plus-square"/>
        Add new server
      </b-button>
    </div>

    <server-list :servers="servers"/>
    <new-server-modal @change="refreshServerList"/>
  </div>
</template>

<script>
  import TrustedServerService from "../../services/TrustedServerService";
  import ServerList from "./ServerList";
  import NewServerModal from "./NewServerModal";

  export default {
    name: "ServerManagement",
    components: { NewServerModal, ServerList },
    data() {
      return {
        servers: [],
      }
    },
    mounted: function () {
      this.refreshServerList();
    },
    methods: {
      refreshServerList: function () {
        const vm = this;
        this.$store.commit('appLoading', true);

        TrustedServerService.getAll()
          .then(response => {
            vm.servers = response.data;
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          });
      }
    }
  }
</script>

<style scoped>
  #btn-add-server {
    margin-bottom: 10px;
    float: right;
    clear: both;
  }
</style>
