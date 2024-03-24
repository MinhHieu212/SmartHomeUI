import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "username",
  userEmail: "user@hcmut.edu.vn",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    resetName: (state) => {
      state.userName = "username";
    },
    resetEmail: (state) => {
      state.userEmail = "user@hcmut.edu.vn";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setEmail, resetEmail, resetName } =
  userInfoSlice.actions;

export const selectUserName = (state) => state.userInfo.userName;
export const selectUserEmail = (state) => state.userInfo.userEmail;

export default userInfoSlice.reducer;
