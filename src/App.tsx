import { Box } from "@mui/material";
import Login from "components/Login";
import React from "react";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Login />
    </Box>
  );
}
