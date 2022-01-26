<template>
  <div class="register">
    Vorname: <input type="text" id="firstName">
    Nachname: <input type="text" id="lastName">
    Email: <input type="text" id="email">
    Passwort: <input type="password" id="password">
    <input type="button" id="send" @click="register()" value="Abschicken">
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: "register",
  created() {
    this.$store.dispatch('testMethod')
  },
  methods: {
    ...mapActions([
        'register'
    ])
  }
}
</script>

<style scoped>

</style>