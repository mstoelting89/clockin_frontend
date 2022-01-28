<template>
  <div class="loginArea">
    <h1>Dies ist der Loginbereich</h1>
    <input type="button" class="btn btn-primary" value="Logout" @click="logout()">
    <input type="button" class="btn btn-primary" id="getData" @click="getDataFromSpring()" value="Daten ziehen">
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "LoginStart",
  methods: {
    ...mapActions([
      'getDataFromSpring'
    ]),
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/"));
    }
  }
}

</script>

<style scoped>

</style>