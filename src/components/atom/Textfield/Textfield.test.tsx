import { render, screen } from "@testing-library/react";
import MyTextField from "./Textfield";
import "@testing-library/jest-dom";

describe("TextField Component", () => {
  test("renders TextField with correct label", () => {
    const { asFragment } = render(<MyTextField variant="outlined" />);
    const inputElement = screen.getByPlaceholderText("Search Anything");
    expect(inputElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
