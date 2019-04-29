<template>
  <div>
    <div id="container-btn-add-user">
      <b-button id="btn-add-user" variant="success" v-b-modal.new-user-modal>
        <font-awesome-icon icon="user-plus"/>
        Add new user
      </b-button>
    </div>

    <user-list :users="users"
               @change="refreshUserList"
    />

    <user-details-modal @change="refreshUserList"/>
  </div>
</template>

<script>
  import UserList from "./UserList";
  import UserDetailsModal from "./UserDetailsModal";
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "UserManagement",
    components: { UserDetailsModal, UserList },
    mixins: [HttpClient],
    data() {
      return {
        users: [],
      }
    },
    mounted: function () {
      this.refreshUserList();
    },
    methods: {
      refreshUserList: function () {
        const vm = this;
        this.$store.commit('appLoading', true);

        this.get("/users")
          .then(response => {
            vm.users = response.data;
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          });
      }
    }
  }
</script>

<style scoped>
  #btn-add-user {
    margin-bottom: 10px;
    float: right;
    clear: both;
  }

</style>
