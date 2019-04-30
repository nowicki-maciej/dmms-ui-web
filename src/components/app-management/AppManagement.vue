<template>
  <div>
    <b-button variant="primary"
              @click="downloadLogs()">
      <font-awesome-icon icon="user-edit"/>
    </b-button>

  </div>
</template>

<script>

  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "AppManagement",
    components: { },
    mixins: [HttpClient],
    props: [],
    data() {

    },
    methods: {
      downloadLogs: function() {
        this.get("/logs/download")
      }
    }
  }
</script>

<style scoped>

</style>
