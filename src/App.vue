<template>
  <div id="app">
    <loading :active.sync="appLoading"
             is-full-page></loading>

    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css'

  const DEFAULT_LAYOUT = 'default';

  export default {
    name: 'App',
    components: { Loading },
    computed: {
      layout() {
        return (this.$route.meta.layout || DEFAULT_LAYOUT) + '-layout';
      },
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
    /*padding-top: 60px;*/
  }
</style>
