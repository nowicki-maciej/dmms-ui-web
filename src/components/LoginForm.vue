<template>
  <div>
    <b-container>
      <b-row>
        <img class="logo" src="/static/logo.png" alt="logo">
      </b-row>
      <b-row>
        <b-col md="4" offset-md="4" class="login-form">
          <h1>Sign in to DMMS</h1>
          <b-form @submit.prevent="onSubmit">
            <b-form-group>
              <b-form-input id="login-form_username"
                            type="text"
                            v-model="form.login"
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
  import HttpClient from '../helpers/HttpClient';

  export default {
    name: "LoginForm",
    mixins: [HttpClient],
    data() {
      return {
        form: {
          login: '',
          password: ''
        },
      }
    },
    methods: {
      onSubmit: function () {
        let login = this.form.login;
        let password = this.form.password;
        const vm = this;

        this.post("/user-management/login", { login, password })
          .then(response => {
            console.log(response);
            vm.$router.push('/user-management');
          });
      }
    }
  }
</script>

<style scoped>
  .logo {
    /*display: block;*/
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    margin-bottom: 20px;
  }
</style>
