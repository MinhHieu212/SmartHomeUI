import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberDevice: 1,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.numberDevice += 1;
    },
    decreament: (state, action) => {
      if (state.numberDevice >= 1) {
        state.numberDevice -= 1;
      }
    },
    setNumberDevice: (state, action) => {
      if (action.payload >= 0) {
        state.numberDevice = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const setlectNumberDevice = (state) => state.device.numberDevice;

export const { setNumberDevice, decreament, increament } = deviceSlice.actions;

export default deviceSlice.reducer;
