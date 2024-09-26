import Button from "@mui/material/Button";
import React from "react";

type MyButtonProps = {
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const MyButton = ({ variant, children, type, onClick }: MyButtonProps) => {
  return (
    <Button type={type} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
