import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addComment, fetchComments } from "./operations";

const extraActions = [addComment, fetchComments];

const getActions = (type) => extraActions.map((action) => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullFiled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handleFullFiled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});
