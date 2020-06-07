<template>
  <transition v-if="show" name="fade">
    <div class="stream-overlay">
      <div class="stream-overlay__header">
        <div style="display: flex;">
          <h4 style="padding-right: 20px;">Therapy<br> Network</h4>
          <h4>Name of Performer</h4>
        </div>
        <div>
          <h4 style="cursor: pointer;" @click="close">Exit Fullscreen</h4>
          <h4 style="cursor: pointer;" @click="toggleMute">{{ muteText }}</h4>
        </div>
      </div>
      <TwitchPlayer
        ref="twitchplayer"
        :channel="channel"
      />
    </div>
  </transition>
</template>

<script>
import TwitchPlayer from 'vue-twitch-player'

export default {
  components: {
    TwitchPlayer
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      channel: 'leavingrecords',
      isMuted: false
    }
  },
  computed: {
    muteText() {
      return this.isMuted ? 'Unmute' : 'Mute'
    }
  },
  watch: {
    show(val) {
      // this.$store.commit(`${val ? 'OPEN' : 'CLOSE'}_STREAM_OVERLAY`)
    }
  },
  mounted() {
    document.addEventListener('keydown', this.keydownHandler)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydownHandler)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    keydownHandler(e) {
      if (this.show && e.keyCode === 27) {
        this.close()
      }
    },
    toggleMute() {
      const player = this.$refs.twitchplayer

      if (player.isMuted()) {
        player.unmute()
        this.isMuted = false
      } else {
        player.mute()
        this.isMuted = true
      }
    }
  }
}
</script>

<style lang="scss">
.stream-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  width: 100vw;
  background-color: $black;
  color: $white;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $black;
    pointer-events: none; //  No controls!
  }
}

.stream-overlay__header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background-image: linear-gradient(0deg, transparent, #000000a8);

  display: flex;
  justify-content: space-between;
}
</style>
