import { createSlice } from "@reduxjs/toolkit";
import addBalanceByUser from "./operations";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: "00.00", isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(addBalanceByUser.pending, (state, _) => (state.isLoading = true))
      .addCase(addBalanceByUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.balance = action.payload),
          (state.error = null);
      })
      .addCase(addBalanceByUser.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      }),
});
