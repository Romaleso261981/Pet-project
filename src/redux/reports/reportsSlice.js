import { createSlice } from '@reduxjs/toolkit';
import { getPeriod } from './reportsOperation';

const initialState = {
  incomes: 10,
  expenses: 10,
  error: null,
  isLoading: false,
};

const reports = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [getPeriod.pending]: (state, _) => ({
      ...state,

      isLoading: true,
    }),
    [getPeriod.fulfilled]: (state, { payload }) => ({
      ...state,
      expenses: payload.expenses,
      incomes: payload.incomes,

      error: null,
      isLoading: false,
    }),
    [getPeriod.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default reports.reducer;
