<template>
  <div class="forgot-password">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
          <h1>Login</h1>

          <form v-if="!resetPassword">
            <div class="mb-3">
              <label for="email" class="form-label">Email Adresse</label>
              <input type="email" class="form-control" id="email" v-model="emailValue">
            </div>
            <div class="mb-3">
              <input type="button" class="btn btn-primary me-5" id="send" @click="forgotPassword(emailValue)" value="Passwort anfordern">
            </div>
          </form>
          <form v-else>
            <div class="mb-3">
              <label for="password" class="form-label">Neues Passwort</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="mb-3">
              <label for="password_repeat" class="form-label">Passwort wiederholen</label>
              <input type="password" class="form-control" id="password_repeat" v-model="passwordRepeat">
            </div>
            <div class="mb-3">
              <input type="button" class="btn btn-primary me-5" id="send_reset" @click="handlePasswordReset(password, passwordRepeat)" value="Passwort zurücksetzen">
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

import auth from "@/services/auth";

export default {
  name: "ForgotPassword",
  data() {
    return {
      emailValue: '',
      resetPassword: false,
      password: '',
      passwordRepeat: ''
    }
  },
  created() {
    if (this.$route.query.token) {
      this.resetPassword = true;
    }
  },
  methods: {
    forgotPassword(email) {
      auth.forgotPassword(email);
    },
    handlePasswordReset(password, passwordRepeat) {
      if (password === passwordRepeat && password !== '') {
        const token = this.$route.query.token;

        auth.passwordReset(token, password);

      } else {
        console.log("Passt nicht");
      }
    }
  }
}
</script>

<style scoped>

</style>