import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { login } from "apis/auth";
import { Account, Token } from "models";
import { TokenState } from ".";

const TOKEN_TYPE_PREFIX = "auth/login";

export const getToken = createAsyncThunk<string, Account>(
  TOKEN_TYPE_PREFIX,
  async (account: Account) => {
    const response = await login(account);
    return response.data.token 
  }
);

export const extraReducers = (builder : ActionReducerMapBuilder<TokenState>) => {
  builder.addCase(getToken.pending, state => {
    state.status = 'pending'
  })
  builder.addCase(getToken.fulfilled, (state, {payload}) => {
    state.status = 'succeeded'
    state.token = payload
  })
  builder.addCase(getToken.rejected, state => {
    state.status = 'failed'
  })
}
