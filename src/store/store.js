import searchSlice from "@/features/searchSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
   reducer: { searchSlice },
});
