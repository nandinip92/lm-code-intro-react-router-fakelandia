import { render, screen, fireEvent } from "@testing-library/react";
import { Confession } from "../confession";
describe("<button/>", () => {
  it(`Given the required props, 
      when the component is rendered, 
      then button must be present`, () => {
    //Act
    render(<Confession />);
    const input = screen.getByText("Confess");
    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props, 
      when the component is rendered, 
      then button is disabled `, () => {
    //Act
    render(<Confession />);
    const input = screen.getByText("Confess");
    //Assert
    expect(input).toBeDisabled();
  });
  it(`Given the required props, 
      when the component is rendered, 
      then button is disabled `, () => {
    //Act
    render(<Confession />);
    const input = screen.getByText("Confess");
    //Assert
    //expect(input).not.toBeDisabled();
  });
});
