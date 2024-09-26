import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    children: {
      control: "text",
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DButton = (args: any) => <Button {...args} />;
DButton.args = {
  variant: "contained",
  children: "Click Me",
};

export const Primary = () => <Button variant="text">Primary Button</Button>;

export const Secondary = () => (
  <Button variant="outlined">Secondary Button</Button>
);

export const Tertiary = () => (
  <Button variant="contained">Tertiary Button</Button>
);
