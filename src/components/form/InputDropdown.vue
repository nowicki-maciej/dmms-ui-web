<template>
  <b-form-group>
    <b-form-select :value="value"
                   @input="updateValue"
                   :options="options">
      <template slot="first" v-if="placeholder">
        <option :value="null" disabled selected>{{ placeholder }}</option>
      </template>
    </b-form-select>
  </b-form-group>
</template>

<script>
  export default {
    name: "InputDropdown",
    props: ['value', 'placeholder', 'options'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>
