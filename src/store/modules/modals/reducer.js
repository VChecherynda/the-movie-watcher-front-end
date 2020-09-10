import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  redirectTo: "",
  data: {}
};

// Under hood reducers uses immer.js library for writing
// brand new immutable state based on changes

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = action.payload;
    },
    setRedirectTo: (state, action) => {
      state.redirectTo = action.payload;
    },
    setModalData: (state, action) => {
      state.data = action.payload;
    },
    clearModal: () => {
      return initialState;
    }
  }
});

export const {
  showModal,
  setRedirectTo,
  setModalData,
  clearModal
} = modalsSlice.actions;

export default modalsSlice.reducer;
