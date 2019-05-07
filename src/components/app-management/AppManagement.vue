<template>
  <b-row>
    <b-col md="2">
      <h2>Logs</h2>
      <a href="/api/logs/download" download>
        <b-button variant="primary">
          <font-awesome-icon icon="cloud-download-alt"/>
          Download logs
        </b-button>
      </a>
    </b-col>
  </b-row>
</template>

<script>

  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "AppManagement",
    mixins: [HttpClient]
  }
</script>

<style scoped>

</style>
