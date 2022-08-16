import { configureStore, createSlice } from "@reduxjs/toolkit";

let coinPrice = createSlice({
  name: "kim",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    coinPrice: coinPrice.reducer,
  },
});
