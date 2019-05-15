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
      <b-form-group>
        <b-form-select v-model="server.type"
                       @input="updateServerType"
                       :options="serverTypes">
          <template slot="first">
            <option :value="null" disabled selected>-- Server type --</option>
          </template>
        </b-form-select>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from '../form/InputSimple';
  import TrustedServerService from "../../services/TrustedServerService";

  const SERVER_TYPES = ['INSOURCE', 'OUTSOURCE'];

  export default {
    name: 'NewServerModal',
    components: { InputSimple },
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
        TrustedServerService.addNewServer({
          ipAddress: this.server.ip,
          assignedId: this.server.assignedId,
          serverType: this.server.type,
        })
          .then(() => this.nSuccess('Successfully added trusted server'))
          .catch(() => this.nError('Failed to add trusted server'))
          .finally(() => {
            this.server = {
              ip: '',
              assignedId: '',
              type: null,
            }
          });
      }
    }
  }
</script>

<style scoped>
</style>
