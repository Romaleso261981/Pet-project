import { createSlice } from "@reduxjs/toolkit";
import { addBalanceByUser } from "./operations";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: 0.0, isLoading: false, error: null },
  extraReducers: {
    [addBalanceByUser.pending]: (state, _) => (state.isLoading = true),
    [addBalanceByUser.fulfilled]: (state, action) => {
      (state.isLoading = false),
        (state.balance = action.payload),
        (state.error = null);
    },
    [addBalanceByUser.rejected]: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
  },
});
