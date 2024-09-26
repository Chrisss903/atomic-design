import InputBox from "../atom/inputBox/inputBox";
import Button from "../atom/Button/Button";
import { Box, Typography } from "@mui/material";

const LoginBox = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"50rem"}
      alignItems={"center"}
      gap={2}
    >
      <Typography marginRight={9.5}>Enter Your Email</Typography>
      <InputBox label="Email" variant="outlined" />
      <Typography marginRight={7.5}>Enter your Password</Typography>
      <InputBox label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Box>
  );
};

export default LoginBox;
