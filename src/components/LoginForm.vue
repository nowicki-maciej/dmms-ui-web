<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="4" offset-md="4" class="login-form">
          <h1>Sign in to DMMS</h1>
          <b-form @submit.prevent="onSubmit">
            <b-form-group>
              <b-form-input id="login-form_username"
                            type="text"
                            v-model="form.username"
                            required
                            placeholder="Username">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="login-form_password"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Sign in</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "LoginForm",
    data() {
      return {
        user: {
          email: '',
          password: '',
        },
      }
    },
    methods: {
      onSubmit: function () {
        // TODO integrate with backend
        // const vm = this;
        //
        // let payload = {
        //   email: this.form.email,
        //   password: this.form.password
        // };
        //
        // axios.post("http://localhost:9090/users", payload)
        //   .then(function () {
        //     vm.registerSuccessful = true;
        //     vm.$router.push("/")
        //   });
      }
    }
  }
</script>

<style scoped>

</style>
