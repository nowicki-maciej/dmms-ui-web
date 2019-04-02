<template>
  <div id="app">
    <loading :active.sync="appLoading"
             is-full-page></loading>
    <router-view/>
  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css'

  export default {
    name: 'App',
    components: { Loading },
    computed: {
      appLoading() {
        return this.$store.state.appLoading;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-top: 60px;
  }
</style>
