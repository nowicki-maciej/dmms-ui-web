<template>
  <div class="login-form-container">
    <b-row>
      <b-col cols="12">
        <img class="logo" src="/static/logo.png" alt="logo">
      </b-col>
      <b-col md="2" offset-md="5">
        <h2>Sign in to DMMS</h2>
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
        this.$store.commit('appLoading', true);
        const vm = this;

        this.post("/user-management/login", { login, password })
          .then(response => {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            vm.$router.push('/library');
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          })
      }
    }
  }
</script>

<style scoped>
  .logo {
    height: 250px;
    margin-bottom: 20px;
  }

  .login-form-container {
    padding-top: 50px;
    height: 100vh;
  }
</style>
