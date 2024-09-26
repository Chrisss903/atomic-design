import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

type InputBoxProps = {
  label?: string;
  variant?: "outlined" | "filled" | "standard";
  children?: string;
  name?: string;
  value?: string;
  type?: string;
  result1?: boolean;
  ChildrenResult?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Add onBlur prop
};

const InputBox = ({
  variant,
  children,
  name,
  value,
  onChange,
  onBlur, // Add onBlur handler
  type,
  result1,
  ChildrenResult,
}: InputBoxProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Typography color={result1 ? "red" : "black"} display={"flex"} gap={1}>
        {children}
        {result1 && (
          <Typography
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            variant="body2"
            fontSize={12}
          >
            {ChildrenResult}
          </Typography>
        )}
      </Typography>

      <TextField
        error={result1}
        type={type}
        onChange={onChange}
        onBlur={onBlur} // Attach the onBlur handler
        name={name}
        value={value}
        variant={variant}
      />
    </Box>
  );
};

export default InputBox;
