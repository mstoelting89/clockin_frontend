<template>
  <div class="timetracking-overview">
    <h1>Dies ist der Loginbereich</h1>
    <input type="button" class="btn btn-primary" value="Start" @click="startTimeTracking">
    <input type="button" class="btn btn-primary" value="Ende" @click="endTimeTracking">
    <input type="button" class="btn btn-primary" value="Get" @click="getTimeTracking">
  </div>
  <div class="row" v-for="timeTrackingItem in showTimeTrackingData" :key="timeTrackingItem.id">
    {{ timeTrackingItem.id }}:
    {{ timeTrackingItem.start.getDate() }}.{{ timeTrackingItem.start.getMonth() + 1 }}.{{ timeTrackingItem.start.getFullYear() }}
    {{ timeTrackingItem.start.getHours() }}:{{ timeTrackingItem.start.getMinutes()}} -
    {{ timeTrackingItem.end.getHours() }}:{{ timeTrackingItem.end.getMinutes() }}

  </div>
</template>

<script>

export default {
  name: "TimeTrackingOverview",
  created() {
    this.$store.dispatch('getTimeTracking');
  },
  computed: {
    showTimeTrackingData() {
      return this.$store.getters.timeTrackingOverview;
    }
  },
  methods: {
    startTimeTracking() {
      if(!this.$store.getters.currentTimeTrackingId) {
        this.$store.dispatch('startTimeTracking');
      } else {
        console.log("Es läuft noch eine Stoppuhr");
      }

    },
    endTimeTracking() {
      if(this.$store.getters.currentTimeTrackingId) {
        this.$store.dispatch('endTimeTracking', {id: this.$store.getters.currentTimeTrackingId, time: ''}).then(() => {
        });
      } else {
        console.log("Es läuft keine Stoppuhr");
      }

    },
    getTimeTracking() {
      this.$store.dispatch('getTimeTracking');
    }
  }
}

</script>

<style scoped>

</style>