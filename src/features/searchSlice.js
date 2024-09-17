import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: { value: [] },
   reducers: {
      fillSearch: (state, action) => {
         state.value = state.value.concat(action.payload);
      },
   },
});
export const { fillSearch } = searchSlice.actions;
export default searchSlice.reducer;
