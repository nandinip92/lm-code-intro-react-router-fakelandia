import { render, screen } from "@testing-library/react";
import { TableHeader } from "./table-header";

describe("<TableHeader/>", () => {
  it(`When the component is rendered, 
    then Table Header must contain Citizen_Id column`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Citizen_Id");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Date column`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Date");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Misdemeanour column`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Misdemeanour");
    expect(element).toBeInTheDocument();
  });
  it(`When the component is rendered, 
    then Table Header must contain Punishment Idea column`, () => {
    render(<TableHeader />);
    const element = screen.getByText("Punishment Idea");
    expect(element).toBeInTheDocument();
  });
});
