export const mutations = {
    UPDATE_TIME_TRACKING (state, payload) {
        state.timeTrackingOverview = payload;
    },
    CURRENT_TIME_TRACKING_ID (state, payload) {
        state.currentTimeTrackingId = payload;
    }
}