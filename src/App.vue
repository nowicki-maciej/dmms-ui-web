<template>
  <div id="app" v-if="initialized">
    <loading :active.sync="appLoading"
             is-full-page></loading>

    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';

  const DEFAULT_LAYOUT = 'default';

  export default {
    name: 'App',
    components: { Loading },
    data() {
      return {
        initialized: false
      }
    },
    computed: {
      layout() {
        return (this.$route.meta.layout || DEFAULT_LAYOUT) + '-layout';
      },
      appLoading() {
        return this.$store.state.appLoading;
      }
    },
    mounted() {
      const vm = this;

      this.$store.dispatch('user/loadCurrent')
        .then(response => {
          if (response.status === 200 && this.$route.path === '/') {
            vm.$router.push("/library");
          }
        })
        .catch(() => {
          vm.$router.push("/");
        })
        .finally(() => {
          vm.initialized = true;
        });
    }
  }
</script>

<style>
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
