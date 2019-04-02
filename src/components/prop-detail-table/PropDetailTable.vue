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

        <download-buttons />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import DownloadButtons from "../DownloadButtons";
  export default {
    name: "PropDetailTable",
    components: { DownloadButtons },
    props: ['rows']
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
</style>
