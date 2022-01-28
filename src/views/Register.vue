<template>
  <div class="register">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
          <h1>Registrierung</h1>
          <form ref="registerForm">
            <div class="mb-3">
              <label for="firstName" class="form-label">Vorname</label>
              <input type="firstName" class="form-control" id="firstName" v-model="firstName">
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Nachname</label>
              <input type="lastName" class="form-control" id="lastName" v-model="lastName">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Passwort</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
              <input type="button" class="btn btn-primary" id="send" @click="register()" value="Abschicken">
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
  name: "register",
  methods: {
    register() {
      let registerData = {
        "firstName": this.$refs.registerForm.elements.firstName.value,
        "lastName": this.$refs.registerForm.elements.lastName.value,
        "email": this.$refs.registerForm.elements.email.value,
        "password": this.$refs.registerForm.elements.password.value
      }

      this.$store
          .dispatch("register", registerData)
          .then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style scoped>

</style>