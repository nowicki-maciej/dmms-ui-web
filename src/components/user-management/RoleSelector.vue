<template>
  <input-dropdown placeholder="-- Account type --"
                  :options="accountTypeOptions"
                  :value="value"
                  @input="updateRole"
  />
</template>

<script>
  import { ACCOUNT_ROLES } from '../../config/constants';
  import InputDropdown from "../form/InputDropdown";

  export default {
    name: "RoleSelector",
    components: { InputDropdown },
    props: ['value'],
    data() {
      return {}
    },
    computed: {
      accountTypeOptions() {
        return ACCOUNT_ROLES.map(role => {
          return { value: role.name, text: role.displayName };
        });
      },
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
