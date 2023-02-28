import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifySettings } from '../../utils/notifySettings';

export const getPeriod = createAsyncThunk(
  'transactions/ADD',

  async (type, { rejectWithValue, getState }) => {
    try {
      const { data } = await instance.post();
      const summary = await instance.get(`transaction/${type}`);
      return { type, data, monthsStats: summary.data.monthsStats };
    } catch (error) {
      const state = getState();
      const { lang } = state.language.lang;
      lang === 'en'
        ? Notiflix.Notify.warning(
          `Server error (during fetching categories): ${error.message}`,
          notifySettings,
        )
        : Notiflix.Notify.warning(
          `Помилка сервера: ${error.message}`,
          notifySettings,
        );
      return rejectWithValue({ error });
    }
  },
);
