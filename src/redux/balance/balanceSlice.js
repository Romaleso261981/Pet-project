import { createSlice } from "@reduxjs/toolkit";
import { addBalanceByUser, getBalance } from "./operations";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: 0, arr: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(addBalanceByUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getBalance.fulfilled, (state, { payload }) => {
       return { ...state,
        balance: payload,}
      })
      .addCase(addBalanceByUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.balance = action.payload),
          (state.error = null);
      })
      .addCase(addBalanceByUser.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      }),
});

export default balanceSlice.reducer;
