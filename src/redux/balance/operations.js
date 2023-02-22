import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-team5.netlify.app/kapusta";

export const addBalanceByUser = createAsyncThunk(
  "/api/finances/balance",
  async ({ balance }, thunkAPI) => {
    try {
      const response = await axios.patch("/finances/balance", { balance });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
