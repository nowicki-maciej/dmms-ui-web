<template>
  <b-modal id="new-user-modal"
           centered
           title="Submit your name"
           style="color: black"
           size="lg"
           @ok="onSubmit">
    <b-form>
      <b-form-group>
        <b-form-input type="text"
                      v-model="user.login"
                      required
                      placeholder="Username">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="password"
                      v-model="user.password"
                      required
                      placeholder="Password">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="password"
                      v-model="user.repeatedPassword"
                      required
                      placeholder="Repeated password">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="email"
                      v-model="user.email"
                      required
                      placeholder="Email">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="text"
                      v-model="user.displayName"
                      required
                      placeholder="Display name">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select v-model="user.type"
                       :options="accountTypeOptions">
          <template slot="first">
            <option :value="null" disabled selected>-- Account type --</option>
          </template>
        </b-form-select>
      </b-form-group>
    </b-form>
  </b-modal>
</template>
<script>
  export default {
    name: 'user-details-modal',
    props: [
      'user',
      'onSubmit',
      'onCancel'
    ],
    data() {
      return {
        accountTypeOptions: ["Admin", "User"],
      }
    },
  }
</script>
<style scoped>

  #new-user-modal {
    color: black;
  }
</style>
