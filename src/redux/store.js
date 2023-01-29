import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
// import { commentApi } from "./commentApi";
import { commentsSlice } from "./comments/commentSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [commentsSlice.name]: commentsSlice.reducer,
    // [commentApi.reducerPath]: commentApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   commentApi.middleware,
  // ],
});
