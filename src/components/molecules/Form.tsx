import InputBox from "../atom/inputBox/inputBox";
import Button from "../atom/Button/Button";
import Dropdown from "../atom/Dropdown/Dropdown";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
const Form = () => {
  const countries: string[] = [
    "India",
    "United States",
    "Germany",
    "Canada",
    "Australia",
    "Japan",
    "Brazil",
    "United Kingdom",
    "France",
    "South Africa",
  ];

  const navigate = useNavigate();

  const [open, SetOpen] = useState(false);
  const [Emailresult, setEmailresult] = useState(true); // Tracks email validation
  const [Passresult1, setPassresult1] = useState(true); // Tracks password validation
  const [Dropresult1, setDropresult1] = useState(true); // Tracks country dropdown validation
  const [emailTouched, setEmailTouched] = useState(false); // Tracks if email was touched
  const [passwordTouched, setPasswordTouched] = useState(false); // Tracks if password was touched

  const [Detail, setDetail] = useState({
    email: "",
    password: "",
    countryval: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setDetail((Detail) => ({
      ...Detail,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailresult(emailRegex.test(value)); // Real-time validation
    }

    if (name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPassresult1(passRegex.test(value)); // Real-time validation
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = event.currentTarget;

    if (name === "email") {
      setEmailTouched(true);
      setEmailresult(Detail.email !== ""); // Check if it's empty when blurred
    }

    if (name === "password") {
      setPasswordTouched(true);
      setPassresult1(Detail.password !== ""); // Check if it's empty when blurred
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const result1 = emailRegex.test(Detail.email);
    const result2 = passRegex.test(Detail.password);

    if (result1 && result2 && Detail.countryval.trim() !== "") {
      SetOpen(true);
      navigate("/Dashboard");
    } else {
      setEmailresult(result1);
      setPassresult1(result2);
      setDropresult1(Detail.countryval.trim() !== "");
      alert("Please fill all the Required fields");
    }
  };

  const handleClose = () => {
    SetOpen(false);
    window.location.reload();
  };

  return (
    <div className="Form">
      <Paper
        elevation={7}
        sx={{
          padding: "4rem",
          marginTop: "5rem",
          paddingLeft: "9rem",
          paddingRight: "11rem",
          backgroundColor: "rgba(0,0, 0, 0.05)",
          boxSizing: "border-box",
          boxShadow: "10px 8px 8px 2px rgba(0, 0, 0, 0.5)",
          borderRadius: "5%",
          border: "0.2px solid rgba(0,0,0,0.25)",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          sx={{ marginTop: "4%", padding: "6%" }}
          gap={1}
        >
          <Typography
            variant="h5"
            component={"h5"}
            sx={{
              textDecoration: "underline",
              marginBottom: "10px",
              textWrap: "nowrap",
            }}
          >
            FORM SUBMISSION
          </Typography>

          <InputBox
            result1={!Emailresult && emailTouched}
            ChildrenResult=" *Required"
            name="email"
            type="email"
            value={Detail.email}
            variant="outlined"
            children="Email"
            onChange={handleChange}
            onBlur={handleBlur} // Blur handler to trigger "Required" when user leaves the field
          />

          <InputBox
            result1={!Passresult1 && passwordTouched}
            ChildrenResult=" *Required"
            name="password"
            type="password"
            value={Detail.password}
            variant="outlined"
            children="Password"
            onChange={handleChange}
            onBlur={handleBlur} // Blur handler for password
          />

          <Dropdown
            name="countryval"
            value={Detail.countryval}
            CountryList={countries}
            onChange={(e) =>
              setDetail({ ...Detail, countryval: e.target.value })
            }
            children="Select the Country"
          />
          {!Dropresult1 && (
            <Typography variant="body2" component={"h6"} color="red">
              *Please Select a Country
            </Typography>
          )}

          <Box marginLeft={"33%"} marginTop={2}>
            <Button
              type="submit"
              variant="contained"
              children="Submit"
              onClick={handleClick}
            />
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Form Details"}</DialogTitle>
            <DialogContent>
              <Typography>Email: {Detail.email}</Typography>
              <Typography>Password: {Detail.password}</Typography>
              <Typography>Country: {Detail.countryval}</Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Paper>
    </div>
  );
};

export default Form;
