import TextField from "@mui/material/TextField";
import React from "react";

type MyTextFieldProps = {
  icon?: React.ReactNode;
  variant?: "outlined" | "filled" | "standard";
  value?: string;
  onChange?: (event: any | React.ChangeEvent<HTMLInputElement>) => void;
};

const MyTextField = ({ variant, icon, value, onChange }: MyTextFieldProps) => {
  return (
    <TextField
      variant={variant}
      value={value}
      onChange={onChange}
      placeholder="Search Anything"
      data-testid="input"
      slotProps={{
        input: {
          endAdornment: icon,
        },
      }}
    />
  );
};

export default MyTextField;
