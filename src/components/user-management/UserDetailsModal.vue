<template>
  <b-modal id="new-user-modal"
           centered
           title="Register new user"
           style="color: black"
           size="lg"
           @ok="submitForm">
    <b-form>
      <input-simple type="text"
                    v-model="newUser.login"
                    required
                    placeholder="Username"
      />
      <input-simple type="password"
                    v-model="newUser.password"
                    required
                    placeholder="Password"
      />
      <input-simple type="password"
                    v-model="newUser.repeatedPassword"
                    required
                    placeholder="Repeated password"
      />
      <input-simple type="email"
                    v-model="newUser.email"
                    required
                    placeholder="Email"
      />
      <input-simple type="text"
                    v-model="newUser.displayName"
                    required
                    placeholder="Display name"
      />

      <role-selector v-model="newUser.role"/>
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from '../form/InputSimple';
  import RoleSelector from './RoleSelector';

  export default {
    name: 'user-details-modal',
    components: { InputSimple, RoleSelector },
    data() {
      return {
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
    methods: {
      submitForm() {
        this.$emit('onSubmit', this.newUser);
      }
    }
  }
</script>

<style scoped>
  #new-user-modal {
    color: black;
  }
</style>
