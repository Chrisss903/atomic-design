import InputBox from "./inputBox";

export default {
  title: "Components/InputBox",
  component: InputBox,
};

export const Default = () => <InputBox label="Enter text" variant="outlined" />;
export const Filled = () => <InputBox label="Filled Input" variant="filled" />;
export const Standard = () => (
  <InputBox label="Standard Input" variant="standard" />
);
