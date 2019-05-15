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
                     @change="$emit('change')"
    />

  </div>
</template>

<script>
  import UserEditModal from './UserEditModal';
  import UserService from "../../services/UserService";

  const ROLES = [
    { name: 'ROLE_ADMIN', display: 'Administrator' },
    { name: 'ROLE_USER', display: 'User' },
  ];

  export default {
    name: "UserList",
    components: { UserEditModal },
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
      },

      userDelete: function (id) {
        const vm = this;
        UserService.deleteUser(id)
          .then(() => {
            vm.$emit('change');
            vm.nSuccess('Successfully deleted user.');
          })
          .catch(() => vm.nError('Failed to delete user.'));
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
