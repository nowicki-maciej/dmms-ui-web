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
            <input-simple type="text"
                          required
                          placeholder="Username"
                          v-model="form.login"
            />
            <input-simple type="password"
                          required
                          placeholder="Password"
                          v-model="form.password"
            />
            <b-button type="submit" variant="primary">Sign in</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import HttpClient from '../helpers/HttpClient';
  import InputSimple from './form/InputSimple';

  export default {
    name: "LoginForm",
    components: { InputSimple },
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
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            vm.$router.push('/user-management');
          });
      }
    }
  }
</script>

<style scoped>
  .logo {
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    margin-bottom: 20px;
  }
</style>
