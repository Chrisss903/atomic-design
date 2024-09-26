import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h5">Loading...</Typography>
    </Box>
  );
};

export default LoadingSpinner;
