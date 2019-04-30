<template>
  <div>
    <div id="container-btn-add-user">
      <b-button id="btn-add-user" variant="success" v-b-modal.category-add-modal>
        <font-awesome-icon icon="plus-square"/>
        Add new category
      </b-button>
    </div>

    <!--    <user-list :users="users"-->
    <!--               @change="refreshUserList"-->
    <!--    />-->

    <category-add-modal/>
  </div>
</template>

<script>
  import HttpClient from "../../helpers/HttpClient";
  import CategoryAddModal from "./CategoryAddModal";

  export default {
    name: "CategoryManagement",
    components: { CategoryAddModal },
    mixins: [HttpClient],
    data() {
      return {
        users: [],
      }
    },
    mounted: function () {
      this.refreshUserList();
    },
    methods: {
      refreshUserList: function () {
        const vm = this;
        this.$store.commit('appLoading', true);

        this.get("/users")
          .then(response => {
            vm.users = response.data;
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
