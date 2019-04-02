<template>
  <b-form-group>
    <b-form-select :value="value"
                   @input="updateRole"
                   ref="roleSelect"
                   :options="accountTypeOptions">
      <template slot="first">
        <option :value="null" disabled selected>-- Account type --</option>
      </template>
    </b-form-select>
  </b-form-group>
</template>

<script>
  import { ACCOUNT_ROLES } from '../../config/constants';

  export default {
    name: "RoleSelector",
    props: [
      'value'
    ],
    data() {
      return {
        accountTypeOptions: ACCOUNT_ROLES,
      }
    },
    methods: {
      updateRole(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>
