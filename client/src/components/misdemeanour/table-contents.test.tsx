import { render, screen } from "@testing-library/react";
//import { fireEvent } from "@testing-library/react";
import { TableContents } from "./table-contents";
import { Misdemeanour } from "../../types/misdemeanour.types";
import * as MisdemeanoursContext from "../hooks/useMisdemeanoursList";

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
const context = { misdemeanours: misdemeanours, setMisdemeanours: () => {} };

beforeEach(() => {
  jest
    .spyOn(MisdemeanoursContext, "useMisdemeanoursList")
    .mockReturnValue(context);
});
afterEach(() => {
  jest.clearAllMocks();
});

describe("<TableContents/>", () => {
  it(`Given the required props filter as no_filter, 
    when the component is rendered, 
    then all the isdemeanours data must be displayed`, () => {
    render(<TableContents filter={"no_filter"} />);
    const input = screen.getByText("2240");
    expect(input).toBeInTheDocument();
  });
  it(`Given the required props filter as lift, 
    when the component is rendered, 
    then all the isdemeanours data must be displayed`, () => {
    render(<TableContents filter={"lift"} />);
    const input = screen.getByText("6978");
    expect(input).toBeInTheDocument();
    const input2 = screen.getByText("lift");
    expect(input2).toBeInTheDocument();
  });
});

/*
********************************************************************************
* Following code is when I passed the data into use context instead of mocking *
********************************************************************************
import { misdemeanourListContext } from "../layouts/main_layouts";
import { Misdemeanour } from "../../types/misdemeanour.types";
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
*/
