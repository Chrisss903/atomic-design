import InputBox from "../atom/inputBox/inputBox";
import Button from "../atom/Button/Button";
import Box from "@mui/material/Box";

const FeedBackForm = () => {
  return (
    <Box sx={{ padding: "16px", border: "1px solid #ccc" }}>
      <InputBox label="Your Feedback" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export default FeedBackForm;
