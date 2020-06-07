// Define State defaults
export const state = () => ({
  streamOverlayVisible: false
})

// Define mutations
export const mutations = {
  OPEN_STREAM_OVERLAY(state) {
    state.streamOverlayVisible = true
  },
  CLOSE_STREAM_OVERLAY(state) {
    state.streamOverlayVisible = false
  }
}
