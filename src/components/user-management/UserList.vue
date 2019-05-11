<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="users">

      <template slot="action" slot-scope="row">
        <b-button variant="primary"
                  v-b-modal.edit-user-modal
                  @click="userEdit(row.item.id)">
          <font-awesome-icon icon="user-edit"/>
        </b-button>

        <b-button variant="danger"
                  @click="userDelete(row.item.id)"
                  v-if="row.item.id !== currentUserId">
          <font-awesome-icon icon="user-minus"/>
        </b-button>
      </template>

    </b-table>

    <user-edit-modal v-if="showUserEditModal"
                     :show="showUserEditModal"
                     :user="userToEdit"
    />

  </div>
</template>

<script>
  import HttpClient from "../../helpers/HttpClient";
  import UserEditModal from './UserEditModal';

  const ROLES = [
    { name: 'ROLE_ADMIN', display: 'Administrator' },
    { name: 'ROLE_USER', display: 'User' },
  ];

  export default {
    name: "UserList",
    components: { UserEditModal },
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
          { key: 'role', label: 'Role', formatter: 'formatRole' },
          { key: 'action', label: 'Action' },
        ],
        currentUserId: this.$store.state.user.id,
        userToEdit: {},
        showUserEditModal: false,
        user: {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          role: ''
        },
      }
    },
    methods: {
      userEdit: function (id) {
        Object.assign(this.userToEdit, this.users.find(e => e.id === id));
        this.showUserEditModal = true;
        this.$emit('edit-user-modal');
      },

      userDelete: function (id) {
        const vm = this;
        this.delete("/users/" + id)
          .then(() => {
            vm.$emit('change');
          });
      },
      formatRole: function (role) {
        return ROLES.filter(r => r.name === role)[0].display;
      }
    },
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
