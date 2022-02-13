<template>
  <div class="landing-page">
    <Navbar />
    <div class="container mt-5">
      <router-view />
    </div>
  </div>

</template>
<script>

import Navbar from "@/components/LandingPage/Navbar";

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
