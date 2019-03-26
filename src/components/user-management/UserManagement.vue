<template>
  <div id="container">
    <div id="container-btn-add-user">
      <b-button id="btn-add-user" variant="success" v-b-modal.new-user-modal>
        <font-awesome-icon icon="user-plus"/>
        Add new user
      </b-button>
    </div>

    <user-list :users="users"
               @user-edit="userEdit"
               @user-delete="userDelete"/>

    <user-details-modal :user="newUser"
                        :onSubmit="registerNewUser"/>
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
        newUser: {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          role: null,
        }
      }
    },
    mounted: function () {
      this.get("/users/current")
        .then(response => {
          console.log(response.data);
        });

      this.refreshUserList();

    },
    methods: {
      refreshUserList: function() {
        const vm = this;

        this.get("/users")
          .then(response => {
            vm.users = response.data;
          })
      },
      userEdit: function (id) {
        console.log("User edit of ID ", id);
      },
      userDelete: function (id) {
        const vm = this;
        this.delete("/users/" + id)
          .then(() => {
            vm.refreshUserList();
          });
      },
      registerNewUser: function () {
        const vm = this;
        this.newUser.role = this.newUser.role.toUpperCase();

        this.post("/users", this.newUser)
          .then(response => {
            vm.refreshUserList();
          });

        this.users.push(this.newUser);
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

  #container {
    width: 70%;
    margin: 0 auto;
  }

</style>
