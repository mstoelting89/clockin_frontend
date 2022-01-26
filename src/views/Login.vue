<template>
  <div class="login">
    Email: <input type="text" id="email">
    Passwort: <input type="password" id="password">
    <input type="button" id="send" @click="login()" value="Abschicken">
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions([
        'login'
    ])
  }
}
</script>

<style scoped>

</style>