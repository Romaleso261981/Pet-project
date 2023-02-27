import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';
import { API_TRANSACTION } from 'api/apiTransactionCategories';

export const addTransactionOp = createAsyncThunk(
  'transactions/ADD',

  async ({ type, transaction }, thunkAPI) => {
    try {
      const { data } = await instance.post(
        API_TRANSACTION[type].apiAddTransactionEndpoint,
        transaction
      );
      const summary = await instance.get(`transaction/${type}`);
      return { type, data, monthsStats: summary.data.monthsStats };
    } catch (error) {
       const state = thunkAPI.getState();
      const { lang } = state.language.lang;
      lang === 'en'
        ? Notiflix.Notify.warning(
            `Server error (during fetching categories): ${error.message}`,
            notifySettings
          )
        : Notiflix.Notify.warning(
            `Помилка сервера: ${error.message}`,
            notifySettings
          );
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  'auth/balance',
  async ({ balance }, { getState, rejectWithValue }) => {
    const state = getState();
    const { lang } = state.language.lang;
    try {
      // console.log(typeof balance);
      if (balance < 1) {
        lang === 'en'
          ? Notiflix.Notify.warning(
              `Ballance must be greater than or equal to 1`,
              notifySettings
            )
          : Notiflix.Notify.warning(
              `Баланс має бути більше чи дорівнювати 1`,
              notifySettings
            );
        return;
      }
      const { data } = await instance.patch('/user/balance', {
        newBalance: +balance,
      });
      // console.log(data);
      return data;
    } catch ({ response }) {
       const state = getState();
       const { lang } = state.language.lang;
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      lang === 'en'?
        Notiflix.Notify.warning(`${error.message}`, notifySettings) :
       Notiflix.Notify.warning(`Щось пішло не так...`, notifySettings) ;
      return rejectWithValue(error)
        ;
    }
  }
);

export const fetchExpenseTransactions = createAsyncThunk(
  'transactions/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('transaction/expense');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchIncomeTransactions = createAsyncThunk(
  'transactions/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('transaction/income');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/remove',
  async ({ id, type }, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`transaction/${id}`);
      const summary = await instance.get(`transaction/${type}`);
      return {
        id,
        newBalance: data.newBalance,
        monthsStats: summary.data.monthsStats,
      };
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchCategoriesOp = createAsyncThunk(
  'transactions/fetchCategories',
  async (type, thunkAPI) => {
    try {
      const { data } = await instance.get(
        API_TRANSACTION[type].apiTransactionsCategoriesEndpoint
      );
      const state = thunkAPI.getState();
      const { lang } = state.language.lang;
      const optionsArray = data.map((option, i) => {
        return {
          value: i,
          label:
            lang === 'en'
              ? API_TRANSACTION[type].apiCategories[option]
              : API_TRANSACTION[type].apiCategoriesUK[option] ?? 'Other',
        };
      });
      return { type, optionsArray };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
