import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import { Token } from "models";
import { State } from "modules";
import { extraReducers } from "./reducers";

const name = "AUTH";

export interface TokenState extends State  {
  token: string,
}

const initialState: TokenState = {
  token: "",
  status: 'idle'
};

export const authSliceOption: CreateSliceOptions<TokenState> = {
  name,
  initialState,
  reducers:{},
  extraReducers,
};

export const authSlice = createSlice(authSliceOption);

const authReducer = authSlice.reducer;
export default authReducer;
