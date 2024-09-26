import { render, screen } from "@testing-library/react";
import InputBox from "./inputBox";
import "@testing-library/jest-dom";

describe("InputBox Component", () => {
  test("renders InputBox with label", () => {
    const { asFragment } = render(
      <InputBox label="Enter text" variant="outlined" children="Label" />
    );
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
