<template>
  <b-modal id="new-server-modal"
           centered
           title="Add new trusted server"
           style="color: black"
           size="lg"
           @ok="addTrustedServer">
    <b-form>
      <input-simple type="text"
                    v-model="server.ip"
                    required
                    placeholder="Server IP"
      />

      <input-simple type="text"
                    v-model="server.assignedId"
                    required
                    placeholder="Server assigned ID"
      />

      <input-dropdown placeholder="-- Server type --"
                      :options="serverTypes"
                      v-model="server.type"
      />
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from '../form/InputSimple';
  import TrustedServerService from "../../services/TrustedServerService";
  import InputDropdown from "../form/InputDropdown";

  const SERVER_TYPES = ['INSOURCE', 'OUTSOURCE'];

  export default {
    name: 'NewServerModal',
    components: { InputDropdown, InputSimple },
    data() {
      return {
        server: {
          ip: '',
          assignedId: '',
          type: null,
        },
        serverTypes: [
          { value: SERVER_TYPES[0], text: SERVER_TYPES[0].toLowerCase() },
          { value: SERVER_TYPES[1], text: SERVER_TYPES[1].toLowerCase() },
        ],
      }
    },
    methods: {
      updateServerType: function (value) {
        this.server.type = value;
      },
      addTrustedServer: function () {
        const vm = this;

        TrustedServerService.addNewServer({
          ipAddress: this.server.ip,
          assignedId: this.server.assignedId,
          serverType: this.server.type,
        })
          .then(() => {
            vm.server = {
              ip: '',
              assignedId: '',
              type: null,
            };

            vm.nSuccess('Successfully added trusted server');
            vm.$emit('change');
          })
          .catch(() => vm.nError('Failed to add trusted server'));
      }
    }
  }
</script>

<style scoped>
</style>
