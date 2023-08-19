import { configureStore } from "@reduxjs/toolkit";
import countereducer from "../CounterSlice/counterSlice";
export const store = configureStore({
  reducer: {
    conuter: countereducer,
  },
});
