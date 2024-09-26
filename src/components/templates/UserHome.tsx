import { Box, Typography } from "@mui/material";
import LoginBox from "../molecules/LoginBox";
import Searchbar from "../molecules/Searchbar";
import Card from "../molecules/Card";

const UserHome = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Box>
        <Typography variant="h4" component={"h1"}>
          User Dashboard
        </Typography>
      </Box>
      <Box>
        <LoginBox />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={2}
      >
        <Typography> Search Movies </Typography>
        <Searchbar />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5.5}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default UserHome;
