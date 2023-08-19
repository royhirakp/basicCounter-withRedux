import { Exposure } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const iniCount = { count: 0 };

const counterSlice = createSlice({
  name: "count",
  initialState: iniCount,
  reducers: {
    addOne: (state) => {
      console.log("workinggg");
      state.count++;
      return;
    },
    reduceOne: (state) => {
      state.count--;
    },
  },
});

export const { addOne, reduceOne } = counterSlice.actions;
export default counterSlice.reducer;
