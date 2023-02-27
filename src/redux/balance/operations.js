import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://kapusta.click/";

const balanceEndpoint = "/auth/users/balance";

export const addBalance = (balance) => {
  return axios.put(balanceEndpoint, { balance });
};

const addBalanceByUser = createAsyncThunk(
  "balance/addBalanceByUser",
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await addBalance(balance);

      return data.userBalance;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export default addBalanceByUser;
