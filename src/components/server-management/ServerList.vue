<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="servers"/>
  </div>
</template>

<script>

  export default {
    name: "ServerList",
    components: {},
    props: [
      'servers',
    ],
    data() {
      return {
        fields: [
          { key: 'ipAddress', label: 'IP address' },
          { key: 'assignedId', label: 'Assigned ID' },
          { key: 'serverType', label: 'Server type' },
        ],
      }
    },
  }

</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
