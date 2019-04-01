<template>
  <ul>
    <menu-item icon="book" link="/library">Biblioteka</menu-item>
    <menu-item icon="users" link="/user-management">Użytkownicy</menu-item>
    <menu-item icon="sign-out-alt" @click="logout">Wyloguj się</menu-item>
<!--    <menu-item icon="share">Udostępnione</menu-item>-->
<!--    <menu-item icon="cogs">Ustawienia</menu-item>-->
  </ul>
</template>

<script>
  import MenuItem from "./MenuItem";
  import HttpClient from "../../../helpers/HttpClient";

  export default {
    name: "MenuList",
    mixins: [HttpClient],
    components: { MenuItem },
    methods: {
      logout: function () {
        const vm = this;

        this.$store.commit('appLoading', true);
        this.post('/user-management/logout', {})
          .then(() => {
            vm.$router.push("/");
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          });
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
    list-style-type: none;
  }
</style>
