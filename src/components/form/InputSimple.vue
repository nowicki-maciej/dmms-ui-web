<template>
  <b-form-group>
    <b-form-input :type="type"
                  ref="formInput"
                  :value="value"
                  @input="updateValue"
                  :required="required"
                  :state="state"
                  :placeholder="placeholder">
    </b-form-input>
  </b-form-group>
</template>

<script>
  export default {
    name: "InputSimple",
    props: [
      'value',
      'type',
      'placeholder',
      'required',
      'state'
    ],
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>
