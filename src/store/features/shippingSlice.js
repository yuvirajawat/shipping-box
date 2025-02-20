import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  boxes: [],
};
const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    addBox: (state, action) => {
      state.boxes.push(action.payload);
    },
  },
});
export const { addBox } = shippingSlice.actions;
export default shippingSlice.reducer;
