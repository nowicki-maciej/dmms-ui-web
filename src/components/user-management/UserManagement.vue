<template>
  <div id="container">
    <div id="container-btn-add-user">
      <b-button id="btn-add-user" variant="success" v-b-modal.new-user-modal>
        <font-awesome-icon icon="user-plus"/>
        Add new user
      </b-button>
    </div>

    <user-list :users="users" @user-edit="userEdit"/>

    <user-details-modal :user="newUser"
                        :onSubmit="registerNewUser"/>
  </div>
</template>

<script>
  import UserList from "./UserList";
  import UserDetailsModal from "./UserDetailsModal";

  export default {
    name: "UserManagement",
    components: { UserDetailsModal, UserList },
    data() {
      return {
        users: [
          {
            id: 1,
            login: "login1",
            displayName: "Jan Kowalski",
            email: 'jkowalski@gmail.com',
            role: "ADMIN"
          },
          {
            id: 2,
            login: "login2",
            displayName: "Andrzej Nowak",
            email: 'anowak@gmail.com',
            role: "USER"
          }
        ],
        newUser: {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          type: null,
        }
      }
    },
    methods: {
      userEdit: function (id) {
        console.log("User edit of ID ", id);
      },
      registerNewUser: function () {
        console.log("Registering new user: ", this.newUser)
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
