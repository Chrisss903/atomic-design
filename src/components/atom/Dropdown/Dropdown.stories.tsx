import Dropdown from "./Dropdown";

export default {
  title: "DropDown",
  component: Dropdown,
};

export const Primary_Dropdown = () => {
  const countries: string[] = [
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

  return <Dropdown children={"select the Country"} CountryList={countries} />;
};
