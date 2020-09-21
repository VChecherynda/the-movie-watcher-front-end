export default {
  saveSearchWord: (state, action) => {
    state.searchWord = action.payload;
  },
  setRedirectTo: (state, action) => {
    state.redirectTo = action.payload;
  },
  clearError: state => {
    state.error = "";
  },
  clearStatus: state => {
    state.status = "";
  },
  clearRedirectTo: state => {
    state.redirectTo = "";
  }
};
