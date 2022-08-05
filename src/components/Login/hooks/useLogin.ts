import { Account } from "models";
import { AppDispatch, RootState } from "modules";
import { getToken } from "modules/auths/reducers";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EMPTY_ACCOUNT: Account = {
  username: "",
  password: "",
};

export default function useLogin() {
  const [account, setAccount] = useState<Account>(EMPTY_ACCOUNT);
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.authReducer);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const onClick = async () => {
    try {
      const originalPromiseResult = await dispatch(getToken(account)).unwrap();
      console.log(originalPromiseResult);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return {
    onChange,
    onClick,
    token,
  };
}
