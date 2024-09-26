import React, { useState } from "react";
import TextField from "./Textfield";
import EditIcon from "@mui/icons-material/Edit";

export default {
  title: "Components/TextField",
  component: TextField,
};

// Default text field story
export const Default = () => <TextField variant="outlined" />;

export const Filled = () => <TextField variant="filled" />;

export const Standard = () => <TextField variant="standard" />;

export const Icon_Textfield = () => (
  <TextField variant="outlined" icon={<EditIcon />} />
);

export const Number_field = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const pattern = /^\d*$/;

    if (pattern.test(newValue)) {
      setValue(newValue);
    } else {
      alert("Enter only numbers");
    }
  };

  return <TextField variant="outlined" value={value} onChange={handleChange} />;
};
