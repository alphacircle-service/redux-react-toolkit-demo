export interface Account {
  username: string;
  password: string;
}

export interface LoginResponse {
  me: {};
  response: string;
  token: string;
}

export interface Token {
  token: string;
}
