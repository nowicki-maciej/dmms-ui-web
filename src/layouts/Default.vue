<template>
  <b-container class="layout" fluid>
    <b-row>
      <b-col id="sidebar" md="2">
        <sidebar/>
      </b-col>

      <b-col id="content">
        <slot/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Sidebar from '../components/sidebar/Sidebar';

  export default {
    name: "Default",
    components: { Sidebar }
  }
</script>

<style scoped>
  #sidebar {
    padding: 30px 0 0;
    background-color: #35466d;
    height: 100vh;
  }

  #content {
    padding-top: 50px;
  }
</style>
