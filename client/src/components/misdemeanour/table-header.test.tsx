import { render, screen } from "@testing-library/react";
import { TableHeader } from "./table-header";

describe("<TableHeader/>", () => {
  it(`When the component is rendered, 
    then Table Header must contain Citizen_Id table__column table__column--`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Citizen_Id");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Date table__column table__column--`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Date");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Misdemeanour table__column table__column--`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Misdemeanour");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Punishment Idea table__column table__column--`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Punishment Idea");
    expect(element).toBeInTheDocument();
  });
});
