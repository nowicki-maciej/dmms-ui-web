<template>
  <b-modal id="new-user-modal"
           centered
           title="Register new user"
           style="color: black"
           size="lg"
           @ok="registerUser">
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
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: 'UserDetailsModal',
    mixins: [HttpClient],
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
      registerUser: function () {
        const vm = this;

        this.post("/users", this.newUser)
          .then(() => {
            vm.$emit('change');
          });
      }
    }
  }
</script>

<style scoped>
  #new-user-modal {
    color: black;
  }
</style>
