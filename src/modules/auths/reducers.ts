import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { login } from "apis/auth";
import { Account, Token } from "models";

const TOKEN_TYPE_PREFIX = "auth/login";

const getTokenPending = (state: Token, action: PayloadAction<Token>) => {
  console.log(action);
  console.log(state);
};

const getTokenFulled = (state: Token, action: PayloadAction<Token>) => {
  state.token = action.payload.token;
  console.log(action);
  console.log(state);
};

const getTokenRejected = (state: Token, action: PayloadAction<Token>) => {
  state.token = "";
  console.log(action);
  console.log(state);
};

export const getToken = createAsyncThunk(
  TOKEN_TYPE_PREFIX,
  async (account: Account, thunkAPI) => {
    const response = await login(account);
    return { token: response.data.token } as Token;
  }
);

export const reducers = {};

export const extraReducers = {
  [getToken.pending.type]: getTokenPending,
  [getToken.fulfilled.type]: getTokenFulled,
  [getToken.rejected.type]: getTokenRejected,
};
