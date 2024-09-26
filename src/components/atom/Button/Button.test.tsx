import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders button ", () => {
    const { asFragment } = render(
      <Button variant="contained">Click Me</Button>
    );
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders button with different labels", () => {
    const { asFragment } = render(<Button variant="outlined">Submit</Button>);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
