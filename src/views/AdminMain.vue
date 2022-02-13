<template>
  <div class="admin-area">
    <h1>Dies ist der Adminbereich</h1>
    <button class="btn btn-primary me-3">
      <router-link to="/admin/administration">Verwaltung</router-link>
    </button>
    <button class="btn btn-primary me-3">
      <router-link to="/admin/register">Nutzer registrieren</router-link>
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AdminMain"
}
</script>

<style scoped>

</style>