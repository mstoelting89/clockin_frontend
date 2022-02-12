<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Clockin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item" v-if="checkLogin">
            <router-link to="/user/loginarea" class="nav-link">Loginarea</router-link>
          </li>
          <li class="nav-item" v-if="checkLogin">
            <router-link to="/admin" class="nav-link">Adminarea</router-link>
          </li>
        </ul>
        <form class="container-fluid justify-content-end d-flex">

          <div class="login-btn" >
            <button class="btn btn-primary me-3"  v-if="!checkLogin">
              <router-link to="/login">Login</router-link>
            </button>
          </div>
          <div class="logout-btn">
            <button class="btn btn-primary me-3" @click="logout"  v-if="checkLogin">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "Navbar",
  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch("setLoggedIn");
    }
  },
  computed: {
    ...mapGetters([
        'loggedIn'
    ]),
    checkLogin() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/"));
    }
  }
}
</script>

<style scoped>
  .btn-primary a {
    color: #ffffff;
    text-decoration: none;
  }
</style>