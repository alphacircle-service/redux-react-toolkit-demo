import { Box, Button, TextField, Typography } from "@mui/material";
import {
  LOGIN_BUTTON_TEXT,
  PASSWORD_LABLE,
  USERNAME_LABLE,
} from "utils/constants/strings";
import useLogin from "./hooks/useLogin";
import { LoginFormLayout } from "./styles";

export default function Login() {
  const { onChange, onClick, token } = useLogin();
  return (
    <Box sx={LoginFormLayout}>
      <TextField
        onChange={onChange}
        label={USERNAME_LABLE}
        name={USERNAME_LABLE}
        type="text"
      />

      <TextField
        label={PASSWORD_LABLE}
        onChange={onChange}
        name={PASSWORD_LABLE}
        type="password"
      />

      <Button variant="contained" onClick={onClick}>
        {LOGIN_BUTTON_TEXT}
      </Button>

      <Typography>{`token-${token}`}</Typography>
    </Box>
  );
}
