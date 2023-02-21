import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: 0 },
  reducers: {
    update(state) {
      state.balance.push(action.payload);
    },
  },
});

export const { update } = balanceSlice.actions;
