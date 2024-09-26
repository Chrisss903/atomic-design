import InputBox from "../atom/inputBox/inputBox";
import Button from "../atom/Button/Button";
import { Box } from "@mui/material";

const SearchBox = () => {
  return (
    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"flex-end"}>
      <Box gap={2} style={{ display: "flex", alignItems: "center" }}>
        <InputBox variant="filled" />
        <Button variant="contained">Search</Button>
      </Box>
    </Box>
  );
};

export default SearchBox;
