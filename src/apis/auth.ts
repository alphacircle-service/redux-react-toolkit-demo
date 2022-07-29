import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Account, LoginResponse } from "models";

const BASE_PATH = "/auth";

const api: AxiosInstance = axios.create({
  baseURL: "https://concon-cms.alphacircle.co.kr",
  timeout: 10000,
});

export const login = async ({ username, password }: Account) => {
  return (await api.post(`${BASE_PATH}/login`, {
    username,
    password,
  })) as AxiosResponse<LoginResponse>;
};
