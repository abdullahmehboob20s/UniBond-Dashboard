import { configureStore } from "@reduxjs/toolkit";
import blackScreenSlice from "./slices/blackScreenSlice";
import loginScreenSlice from "./slices/loginScreenSlice";

export const store = configureStore({
  reducer: {
    blackScreenState: blackScreenSlice,
    loginScreenState: loginScreenSlice,
  },
});
