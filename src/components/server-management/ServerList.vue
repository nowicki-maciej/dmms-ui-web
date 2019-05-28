<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="servers">

      <template slot="action" slot-scope="row">
        <b-button variant="primary"
                  v-if="row.item.accepted === false"
                  @click="acceptServer(row.item.assignedId)">
          <font-awesome-icon icon="check-circle"/>
        </b-button>

        <b-button variant="danger"
                  @click="denyServer(row.item.assignedId)">
          <font-awesome-icon icon="times-circle"/>
        </b-button>
      </template>

    </b-table>
  </div>
</template>

<script>

  import TrustedServerService from "../../services/TrustedServerService";

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
          { key: 'action', label: 'Action' },
        ],
      }
    },
    methods: {
      acceptServer: function (id) {
        const vm = this;

        TrustedServerService.acceptServer(id)
          .then(() => {
            vm.$emit('change');
            vm.nSuccess('Server accepted.');
          })
          .catch(() => vm.nError('Failed to accept server.'));
      },
      denyServer: function(id) {
        const vm = this;

        TrustedServerService.denyServer(id)
          .then(() => {
            vm.$emit('change');
            vm.nSuccess('Server denied.');
          })
          .catch(() => vm.nError('Failed to deny server.'));
      }
    }
  }

</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
