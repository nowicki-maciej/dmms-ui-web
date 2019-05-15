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
  import UserService from "../../services/UserService";
  import { ACCOUNT_ROLES } from '../../config/constants';
  import RoleSelector from "./RoleSelector";

  export default {
    name: 'UserDetailsModal',
    components: { RoleSelector, InputSimple },
    data() {
      return {
        newUser: this.emptyUser(),
      }
    },
    computed: {
      accountTypeOptions() {
        return ACCOUNT_ROLES.map(role => {
          return { value: role.name, text: role.displayName };
        });
      },
    },
    methods: {
      emptyUser: function () {
        return {
          login: '',
          password: '',
          repeatedPassword: '',
          email: '',
          displayName: '',
          role: null,
        };
      },
      registerUser: function () {
        const vm = this;

        UserService.addNewUser(this.newUser)
          .then(() => {
            vm.nSuccess('Successfully added user.');
            vm.newUser = vm.emptyUser();
            vm.$emit('change');
          })
          .catch(() => vm.nError('Failed to add user.'));
      }
    }
  }
</script>

<style scoped>
  #new-user-modal {
    color: black;
  }
</style>
