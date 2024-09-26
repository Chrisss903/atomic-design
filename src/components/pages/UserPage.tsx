// import UserHome from "../templates/UserHome";
import { Box } from "@mui/material";
// import Header from "../organism/Header";
import Form from "../molecules/Form";

const UserPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {/* <Box borderBottom={"1px solid black"}>
        <Header />
      </Box>
      <Box>
        <UserHome />
      </Box> */}
      <Form />
    </Box>
  );
};

export default UserPage;
