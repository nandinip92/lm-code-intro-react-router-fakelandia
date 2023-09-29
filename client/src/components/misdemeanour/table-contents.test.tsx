import { render, screen } from "@testing-library/react";
//import { fireEvent } from "@testing-library/react";
import { TableContents } from "./table-contents";

import { misdemeanourListContext } from "../layouts/main_layouts";
import { Misdemeanour } from "../../types/misdemeanour.types";

const misdemeanours = [
  {
    citizenId: 2240,
    misdemeanour: "united",
    date: "29/09/2023",
  },
  {
    citizenId: 24285,
    misdemeanour: "vegetables",
    date: "29/09/2023",
  },
  {
    citizenId: 6978,
    misdemeanour: "lift",
    date: "29/09/2023",
  },
] as Misdemeanour[];

const renderTableContentsWithContext = (filter: string) => {
  const setMisdemeanours = () => {};
  return render(
    <misdemeanourListContext.Provider
      value={{ misdemeanours, setMisdemeanours }}
    >
      <TableContents filter={filter} />
    </misdemeanourListContext.Provider>
  );
};
describe("<TableContents/>", () => {
  it(`Given the required props filter as no_filter, 
    when the component is rendered, 
    then all the isdemeanours data must be displayed`, () => {
    renderTableContentsWithContext("no_filter");
    const input = screen.getByText("2240");
    expect(input).toBeInTheDocument();
  });
  it(`Given the required props filter as lift, 
    when the component is rendered, 
    then all the isdemeanours data must be displayed`, () => {
    renderTableContentsWithContext("lift");
    const input = screen.getByText("6978");
    expect(input).toBeInTheDocument();
    const input2 = screen.getByText("lift");
    expect(input2).toBeInTheDocument();
  });
});
