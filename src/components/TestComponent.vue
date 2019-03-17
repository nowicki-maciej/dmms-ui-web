<template>
  <div>
    <user-management/>
  </div>
</template>

<script>

  import LoginForm from "./LoginForm";
  import UserManagement from "./user-management/UserManagement";

  export default {
    name: 'TestComponent',
    components: { UserManagement, LoginForm },
    data() {
      return {}
    }
  }
</script>

<style scoped>
</style>
