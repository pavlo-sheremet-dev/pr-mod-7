import { createSlice } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.value;

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, { payload} ) => {
      state.value = payload;
    }
  },
});

export const { filter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
