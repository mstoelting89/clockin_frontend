<template>
  <div class="loginArea">
    <h1>Dies ist der Loginbereich</h1>
    <input type="button" class="btn btn-primary" value="Start">
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
    startTimeTracking() {

    }
  }
}

</script>

<style scoped>

</style>