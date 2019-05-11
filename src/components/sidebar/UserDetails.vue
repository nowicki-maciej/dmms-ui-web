<template>
  <div id="user-details">
    <font-awesome-icon class="user-photo" icon="camera"/>
    <p>
      <span>
        {{ user.displayName || user.login }}
        <font-awesome-icon class="caret-down-icon" icon="caret-down"/>
      </span>
    </p>
  </div>
</template>

<script>

  export default {
    name: "UserDetails",
    data() {
      return {
        user: this.$store.state.user,
      }
    },
  }
</script>

<style scoped>
  .user-photo {
    margin-top: 10px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 50%;
    font-size: 80px;
  }

  p {
    font-size: 16px;
    margin: 15px 0;
  }

  span {
    cursor: pointer;
    border: 2px solid #25314f;
    display: inline-block;
    padding: 5px 20px;
    text-align: left;
    border-radius: 30px;
    width: 200px;
  }

  span:hover {
    background-color: white;
    color: black;
  }

  .caret-down-icon {
    font-size: 20px;
    display: inline-block;
    float: right;
  }
</style>
