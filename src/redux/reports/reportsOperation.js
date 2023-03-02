import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifySettings } from '../../utils/notifySettings';
import { getPeriodTransactions } from "../../API";
import hendlerError from '../error/handleError';
// export const getPeriod = createAsyncThunk(
//   'transactions/ADD',

//   async (type, { rejectWithValue, getState }) => {
//     try {
//       const { data } = await instance.post();
//       const summary = await instance.get(`transaction/${type}`);
//       return { type, data, monthsStats: summary.data.monthsStats };
//     } catch (error) {
//       const state = getState();
//       const { lang } = state.language.lang;
//       lang === 'en'
//         ? Notiflix.Notify.warning(
//           `Server error (during fetching categories): ${error.message}`,
//           notifySettings,
//         )
//         : Notiflix.Notify.warning(
//           `Помилка сервера: ${error.message}`,
//           notifySettings,
//         );
//       return rejectWithValue({ error });
//     }
//   },
// // );

export const getPeriod = createAsyncThunk(
  'reports/getPeriodTransactions',
  async (date, { rejectWithValue, getState, }) => {
    try {
      const { data } = await getPeriodTransactions(date);
      return data;
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
  }
);


// export const getPeriod = createAsyncThunk(
//   'reports/getPeriodTransactions',
//   async (date, { rejectWithValue, dispatch }) => {
//     try {
//       const { data } = await getPeriodTransactions(date);
//       return data;
//     } catch (err) {
//       setTimeout(() => {
//         dispatch(hendlerError({ err, cb: getPeriod }));
//       }, 0);
//       return rejectWithValue(err);
//     }
//   }
// );