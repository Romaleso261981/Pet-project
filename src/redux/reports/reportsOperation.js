import { createAsyncThunk } from '@reduxjs/toolkit';
import hendlerError from 'redux/error/handleError';
import { getPeriodTransactions } from 'utils/api';

export const getPeriod = createAsyncThunk(
  'reports/getPeriodTransactions',
  async (date, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getPeriodTransactions(date);
      return data;
    } catch (err) {
      setTimeout(() => {
        dispatch(hendlerError({ err, cb: getPeriod }));
      }, 0);
      return rejectWithValue(err);
    }
  }
);
