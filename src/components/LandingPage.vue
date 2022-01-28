<template>
  <h1>Willkommen auf der Startseite</h1>
  <input type="button" class="btn btn-primary" value="Zum Login" @click="loginRedirect()">
  <input type="button" class="btn btn-primary" value="Registrieren" @click="registerRedirect()">
</template>

<script>

export default {
  name: "LandingPage",
  methods: {
    loginRedirect() {
      this.$router.push('/login')
    },
    registerRedirect() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

</style>