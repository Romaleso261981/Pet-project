import { API } from "../../API";
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = "https://kapusta.click/";

// const balanceEndpoint = ;

// export const addBalance = (balance) => ;

const addBalanceByUser = createAsyncThunk(
  'balance/addBalanceByUser',
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await API.put('auth/users/balance', { balance });
      console.log(data);
      return data.userBalance;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export default addBalanceByUser;
