import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  type: "",
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
    setModalType: (state, action) => {
      state.type = action.payload;
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
  setModalType,
  setRedirectTo,
  setModalData,
  clearModal
} = modalsSlice.actions;

export default modalsSlice.reducer;
