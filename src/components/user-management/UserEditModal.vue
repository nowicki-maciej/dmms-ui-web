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
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: 'UserEditModal',
    components: { InputSimple, RoleSelector },
    mixins: [HttpClient],
    props: ['user'],
    methods: {
      changeRole() {
        const vm = this;
        const payload = {
          id: this.user.id,
          role: this.user.role,
        };

        this.put("/users/role", payload)
          .then(() => {
            vm.$emit('change');
          });
      }
    },
  }
</script>

<style scoped>
  #new-user-modal {
    color: black;
  }
</style>
