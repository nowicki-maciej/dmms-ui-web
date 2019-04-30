<template>
  <b-modal id="category-add-modal"
           centered
           title="Add category"
           style="color: black"
           size="lg"
           @ok="addCategory">

    <b-form>
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
        let name = this.categoryName.trim().split(' ')
          .map(part => part.trim())
          .filter(part => part)
          .map(part => part[0].toUpperCase() + part.substring(1).toLowerCase())
          .join(' ');

        console.log("Name: ", name);
        this.post("/categories", { name });
      }
    },
  }
</script>

<style scoped>

</style>
