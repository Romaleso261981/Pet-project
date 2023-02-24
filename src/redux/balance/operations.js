import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-team5.netlify.app/kapusta";

const balanceEndpoint = "/api/auth/users/balance";

const addBalanceByUser = createAsyncThunk(
  "balance/addBalanceByUser",
  async (balance, thunkAPI) => {
    try {
      const response = await axios.patch(balanceEndpoint, { balance });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default addBalanceByUser;
