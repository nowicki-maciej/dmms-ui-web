<template>
  <b-modal id="edit-user-modal"
           centered
           title="Edit user"
           style="color: black"
           size="lg"
           @ok="changeRole">

    <p>Login: {{ user.login }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Display name: {{ user.displayName }}</p>

    <b-form>
      <role-selector v-model="user.role"/>
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from '../form/InputSimple';
  import RoleSelector from './RoleSelector';
  import UserService from "../../services/UserService";

  export default {
    name: 'UserEditModal',
    components: { InputSimple, RoleSelector },
    props: ['user'],
    methods: {
      changeRole() {
        const vm = this;

        UserService.changeUserRole(this.user.id, this.user.role)
          .then(() => {
            vm.nSuccess('Successfully changed user role.');
            vm.$emit('change');
          })
          .catch(() => this.nError('Failed to change user role.'));
      }
    },
  }
</script>

<style scoped>
</style>
