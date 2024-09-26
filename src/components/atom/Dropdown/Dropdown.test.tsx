import Dropdown from "./Dropdown";
import { fireEvent, render, screen } from "@testing-library/react";

const countries = [
  "India",
  "United States",
  "Germany",
  "Canada",
  "Australia",
  "Japan",
  "Brazil",
  "United Kingdom",
  "France",
  "South Africa",
];

test("Dropdown label is rendering", () => {
  render(<Dropdown CountryList={countries} children="Select Country" />);
  expect(screen.getByTestId("Label")).toBeInTheDocument();
});

test("Dropdown select bar is rendering", () => {
  render(<Dropdown CountryList={countries} />);
  expect(screen.getByTestId("Selectbar")).toBeInTheDocument();
});

test("Selecting an option updates the dropdown value-India", () => {
  render(<Dropdown CountryList={countries} />);

  const dropdownSelect = screen.getByRole("combobox");

  fireEvent.mouseDown(dropdownSelect);

  const option = screen?.getAllByTestId("Select-Option");
  fireEvent.click(option[0]);

  const Inputlabel1 = screen.getByDisplayValue("India");

  expect(Inputlabel1)?.toHaveValue("India");
});

test("Selecting an option updates the dropdown value-India", () => {
  render(<Dropdown CountryList={countries} />);

  const dropdownSelect = screen.getByRole("combobox");

  fireEvent.mouseDown(dropdownSelect);

  const option = screen?.getAllByTestId("Select-Option");
  fireEvent.click(option[1]);

  const Inputlabel1 = screen.getByDisplayValue("United States");

  expect(Inputlabel1)?.toHaveValue("United States");
});
