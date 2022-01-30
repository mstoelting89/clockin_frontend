<template>
  <div class="login">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
          <h1>Login</h1>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email Adresse</label>
              <input type="email" class="form-control" id="email" v-model="emailValue">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Passwort</label>
              <input type="password" class="form-control" id="password" v-model="passwordValue">
            </div>
            <div class="mb-3">
              <input type="button" class="btn btn-primary me-5" id="send" @click="signIn(emailValue, passwordValue)" value="Login">
              <a href="#">Passwort vergessen</a>
            </div>

          </form>
        </div>
        <div class="col">
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      emailValue: '',
      passwordValue: ''
    }
  },
  methods: {
    signIn(email, password) {
      this.$store
          .dispatch("login", {email, password})
          .then(() => {
            this.$router.push('/loginarea');
          })
    }
  }
}
</script>

<style scoped>
</style>