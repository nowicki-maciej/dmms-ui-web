<template>
  <ul>
    <menu-item icon="book" link="/library">Library</menu-item>
    <menu-item icon="retweet" link="/shared-to-me">Shared to me</menu-item>
    <menu-item icon="share-square" link="/shared-to-others">Shared to others</menu-item>

    <role-wrapper :role="ADMIN_ROLE">
      <menu-item icon="users" link="/user-management">Users</menu-item>
      <menu-item icon="archive" link="/category-management">Categories</menu-item>
      <menu-item icon="cogs" link="/app-management">Settings</menu-item>
    </role-wrapper>

    <menu-item icon="sign-out-alt" @click="logout">Logout</menu-item>
  </ul>
</template>

<script>
  import MenuItem from "./MenuItem";
  import RoleWrapper from "../../RoleWrapper";
  import { ADMIN_ROLE } from "../../../helpers/RoleHierarchy";
  import UserService from "../../../services/UserService";

  export default {
    name: "MenuList",
    components: { MenuItem, RoleWrapper },
    data() {
      return {
        ADMIN_ROLE,
      }
    },
    methods: {
      logout: function () {
        const vm = this;

        this.$store.commit('appLoading', true);
        UserService.logout()
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
