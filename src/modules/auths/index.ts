import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

import { Token } from "models";
import { extraReducers, reducers } from "./reducers";

const name = "AUTH";

const initialState: Token = {
  token: "",
};

export const authSliceOption: CreateSliceOptions<Token> = {
  name,
  initialState,
  reducers,
  extraReducers,
};

export const authSlice = createSlice(authSliceOption);

export default authSlice.reducer;
