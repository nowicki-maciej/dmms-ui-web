<template>
  <div>
    <b-table class="table-white"
             outlined
             hover
             :fields="fields"
             :items="categories">

      <template slot="action" slot-scope="row">
        <b-button variant="danger"
                  @click="categoryDelete(row.item.id)">
          <font-awesome-icon icon="minus-square"/>
        </b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
  import HttpClient from "../../helpers/HttpClient";

  export default {
    name: "CategoryList",
    components: {},
    mixins: [HttpClient],
    props: [
      'categories',
    ],
    data() {
      return {
        fields: [
          { key: 'name', label: 'Category' },
          { key: 'action', label: 'Action' },
        ],
      }
    },
    methods: {
      categoryDelete: function (id) {
        const vm = this;
        this.delete("/categories/" + id)
          .then(() => {
            vm.$emit('change');
          });
      },
    },
  }
</script>

<style scoped>
  .table-white {
    background-color: white;
  }
</style>
