<template>
  <div class="login-form-container">
    <b-row>
      <b-col cols="12">
        <img class="logo" src="/static/logo.png" alt="logo">
      </b-col>
      <b-col md="2" offset-md="5">
        <h2>Sign in to DMMS</h2>
        <b-form @submit.prevent="onSubmit">
          <b-form-invalid-feedback :state="validationState">Incorrect login or password</b-form-invalid-feedback>
          <input-simple type="text"
                        :state="validationState"
                        required
                        placeholder="Username"
                        v-model="form.login"
          />
          <input-simple type="password"
                        :state="validationState"
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
  import InputSimple from './form/InputSimple';

  export default {
    name: "LoginForm",
    components: { InputSimple },
    data() {
      return {
        form: {
          login: '',
          password: ''
        },
        validationState: null,
      }
    },
    methods: {
      onSubmit: function () {
        let login = this.form.login;
        let password = this.form.password;
        this.$store.commit('appLoading', true);
        const vm = this;

        this.$store.dispatch('user/login', { login, password })
          .then(() => {
            vm.$router.push('/library');
          })
          .catch(() => {
            vm.validationState = false;
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          });
      }
    },
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
