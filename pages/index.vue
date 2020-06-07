<template>
  <div class="container" style="margin-top: 55px">
    <div>
      <h1>Therapy Network</h1>
      <div class="red" style="margin: 2rem 0 2rem 1rem; font-size: 1.3rem; letter-spacing: 0.05em;">Upcoming</div>
      <h1>Name of person or group</h1>
      <div style="margin: 3rem 0">
        <div class="btn" @click="joinStream()">
          Join<br>Stream
        </div>
      </div>
      <h2>Live Now</h2>

      <div style="margin-top: 2rem; font-size: 1.2rem;">
        <h6>Therapy network is an art based media experience</h6>
        <div class="d-inline-block">that uses platforms like</div>
        <h6 class="d-inline-block">Streaming content</h6>
        <h6 class="d-inline-block">Live shoes</h6>
        <h6 class="d-inline-block">and community-based gatherings</h6>
        <div>to bring people together and explore their collected interests in culture and healing. (more....)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    joinStream() {
      this.$store.commit('OPEN_STREAM_OVERLAY')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  padding: 0 30px;
}
</style>
