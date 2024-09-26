import { Box, Typography } from "@mui/material";
import SearchBox from "../molecules/Searchbar";

const Header = () => {
  return (
    <Box padding={1} display={"flex"} justifyContent={"space-around"}>
      <Typography
        variant="h3"
        component={"h3"}
        marginRight={40}
        sx={{ font: "Sans-serif" }}
      >
        Sample Text
      </Typography>
      <SearchBox />
    </Box>
  );
};

export default Header;
