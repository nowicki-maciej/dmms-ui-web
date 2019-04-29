<template>
  <div>
    <h3 id="sidebar-title">Digital Media Management System</h3>

    <user-details/>

    <menu-list/>
  </div>
</template>

<script>
  import UserDetails from './UserDetails';
  import MenuList from './menu/MenuList';

  export default {
    name: "Sidebar",
    components: { UserDetails, MenuList }
  }
</script>

<style scoped>
  h3 {
    font-size: 18px;
  }

  #sidebar-title {
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 3px solid black;
  }
</style>
