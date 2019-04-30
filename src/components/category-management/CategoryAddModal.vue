<template>
  <b-modal id="category-add-modal"
           centered
           title="Add category"
           style="color: black"
           size="lg"
           @ok="addCategory">

    <b-form @submit.prevent>
      <input-simple v-model="categoryName"
                    placeholder="Category name"
      />
    </b-form>
  </b-modal>
</template>

<script>
  import InputSimple from '../form/InputSimple';
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: 'CategoryAddModal',
    components: { InputSimple },
    mixins: [HttpClient],
    data() {
      return {
        categoryName: '',
      }
    },
    methods: {
      addCategory() {
        const vm = this;
        let name = this.categoryName.trim().split(' ')
          .map(part => part.trim())
          .filter(part => part)
          .map(part => part[0].toUpperCase() + part.substring(1).toLowerCase())
          .join(' ');

        this.categoryName = '';
        this.post("/categories", { name })
          .then(() => vm.$emit('change'));
      }
    },
  }
</script>

<style scoped>

</style>
