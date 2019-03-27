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
        <b-button variant="primary"
                  @click="$emit('user-edit', row.item.id)">
          <font-awesome-icon icon="user-edit"/>
        </b-button>
        <b-button variant="danger"
                  @click="$emit('user-delete', row.item.id)"
                  v-if="row.item.id !== currentUserId">
          <font-awesome-icon icon="user-minus"/>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "UserList",
    mixins: [HttpClient],
    props: [
      'users',
      'onDelete'
    ],
    data() {
      return {
        fields: [
          { key: 'login', label: 'Login' },
          { key: 'displayName', label: 'Display name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'action', label: 'Action' },
        ],
        currentUserId: JSON.parse(localStorage.getItem('currentUser')).id,
        user: {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          role: ''
        },
        showModal: false,
      }
    },
    methods: {},
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
