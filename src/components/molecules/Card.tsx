import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Card = () => {
  return (
    <Box
      margin={0}
      width={"12rem"}
      sx={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <Typography> This is a Sample Card </Typography>
      <Typography sx={{ textWrap: "nowrap" }}>
        sample address:Whitefield
      </Typography>
      <Typography>Bangalore</Typography>
    </Box>
  );
};

export default Card;
