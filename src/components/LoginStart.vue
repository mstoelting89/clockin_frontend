<template>
  <div class="loginArea">
    <h1>Dies ist der Loginbereich</h1>
    <input type="button" class="btn btn-primary" value="Start" @click="startTimeTracking">
    <input type="button" class="btn btn-primary" value="Ende" @click="endTimeTracking">
  </div>
</template>

<script>

export default {
  name: "LoginStart",
  methods: {
    startTimeTracking() {
      this.$store.dispatch('startTimeTracking');
    },
    endTimeTracking() {
      this.$store.dispatch('endTimeTracking');
    }
  }
}

</script>

<style scoped>

</style>