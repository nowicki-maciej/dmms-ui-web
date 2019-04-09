<template>
  <div>
    <b-row>
      <b-col cols="9">
        <b-row v-for="row in rows" :key="row.prop">
          <b-col cols="1" class="prop">
            {{ row.prop }}
          </b-col>
          <b-col class="detail">
            {{ row.detail }}
          </b-col>
          <b-col cols="1"/>
        </b-row>
      </b-col>

      <b-col>
        <img src="/static/lotr.jpg" alt="LOTR" style="max-width: 100%;">

        <div class="download-section">
          <h3>Download</h3>
          <download-buttons :book="book"/>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import DownloadButtons from "../DownloadButtons";
  export default {
    name: "PropDetailTabl",
    components: { DownloadButtons },
    props: ['rows', 'book']
  }
</script>

<style scoped>
  .prop {
    text-align: right;
    font-weight: bold;
  }

  .detail {
    text-align: left;
  }

  .download-section {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 3px solid #35466d;
  }
</style>
