import { API } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://kapusta.click/";

// const balanceEndpoint = ;

// export const addBalance = (balance) => ;

const addBalanceByUser = createAsyncThunk(
  "balance/addBalanceByUser",
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await API.put("", { balance });
      console.log(data);
      return data.userBalance;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const getBalance = createAsyncThunk(
  "balance/getBalance",
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await API.get(
        "/api/finances/summary?type=expenses&countmonth=6 "
      );
      return data[0].totalAmount;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export { addBalanceByUser, getBalance };
