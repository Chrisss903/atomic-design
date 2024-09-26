import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type DropdownProps = {
  children?: string;
  label?: string;
  CountryList?: string[];
  name?: string;
  value?: string; // Updated to include selected value
  onChange?: (event: SelectChangeEvent<string>) => void;
};

const Dropdown = ({
  children,
  CountryList,
  name,
  onChange,
  value,
}: DropdownProps) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={2}
    >
      <InputLabel data-testid="Label" id="formCountry">
        {children}
      </InputLabel>
      <Select
        data-testid="Selectbar"
        onChange={onChange}
        value={value} // Make sure the value is set properly
        name={name}
        labelId="formCountry"
        sx={{ width: "14.3rem" }}
      >
        {CountryList &&
          CountryList.map((country, index) => (
            <MenuItem key={index} value={country} data-testid="Select-Option">
              {country}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
};

export default Dropdown;
