<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="users">

      <template slot="role" slot-scope="data">
        {{ data.value.toLowerCase() }}
      </template>

      <template slot="action" slot-scope="row">
        <b-button variant="primary" @click="$emit('user-edit', row.item.id)">
          <font-awesome-icon icon="user-edit"/>
        </b-button>

        <b-button variant="danger" @click="deleteUser(row.item.id)">
          <font-awesome-icon icon="user-minus"/>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: "UserList",
    props: [
      'users'
    ],
    data() {
      return {
        fields: [
          { key: 'login', label: 'Login' },
          { key: 'displayName', label: 'Display name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Account type' },
          { key: 'action', label: 'Action' },
        ],
        user: {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          type: ''
        },
        showModal: false,
      }
    },
    methods: {
      deleteUser: function (id) {
        console.log("Deleting user if ID ", id);
      }
    }
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
