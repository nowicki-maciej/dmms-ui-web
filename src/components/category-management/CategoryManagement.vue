<template>
  <div>
    <div id="container-btn-add-user">
      <b-button id="btn-add-user" variant="success" v-b-modal.category-add-modal>
        <font-awesome-icon icon="plus-square"/>
        Add new category
      </b-button>
    </div>

    <category-list :categories="categories" @change="refreshCategoriesList" />

    <category-add-modal @change="refreshCategoriesList" />
  </div>
</template>

<script>
  import CategoryAddModal from "./CategoryAddModal";
  import CategoryList from "./CategoryList";
  import CategoryService from "../../services/CategoryService";

  export default {
    name: "CategoryManagement",
    components: { CategoryList, CategoryAddModal },
    data() {
      return {
        categories: [],
      }
    },
    mounted: function () {
      this.refreshCategoriesList();
    },
    methods: {
      refreshCategoriesList: function () {
        const vm = this;
        this.$store.commit('appLoading', true);

        CategoryService.getAll()
          .then(response => {
            vm.categories = response.data;
          })
          .finally(() => {
            vm.$store.commit('appLoading', false);
          });
      }
    }
  }
</script>

<style scoped>
  #btn-add-user {
    margin-bottom: 10px;
    float: right;
    clear: both;
  }

</style>
