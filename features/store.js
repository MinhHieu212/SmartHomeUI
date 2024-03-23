import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfo/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});
