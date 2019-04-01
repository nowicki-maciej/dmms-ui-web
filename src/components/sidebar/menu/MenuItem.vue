<template>
  <li @click="$emit('click')">
    <a :href="link" @click.prevent="changeUrl(link)">
      <font-awesome-icon class="option-icon" :icon="icon"/>
      <slot/>
      <span><font-awesome-icon class="caret-right" icon="caret-right"/></span>
    </a>
  </li>
</template>

<script>
  export default {
    name: "MenuItem",
    props: [
      'icon',
      'link',
    ],
    data() {
      return {
      }
    },
    methods: {
      changeUrl: function(path) {
        if (path) {
          this.$router.push(path);
        }
      }
    }
  }
</script>

<style scoped>
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
  }

  li {
    font-size: 20px;
    border-bottom: 3px solid #25314f;
    text-align: left;
  }

  li:first-child {
    border-top: 3px solid #25314f;
  }

  li:hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }

  .option-icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 20px;
    width: 30px;
  }

  .caret-right {
    font-size: 30px;
  }

  span {
    float: right;
  }
</style>
