import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Filter from "./filter";

describe("<Filter/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Select DropDown box must be present`, () => {
    //Arrange
    const requiredProps = {
      onChangeFilter: () => {},
    };
    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByTestId("midemeanoursFilter");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we Select certain option, do they get selected value`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps = {
      onChangeFilter: mockOnChange,
    };
    const event = { target: { value: "rudeness" } };
    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByTestId("midemeanoursFilter");
    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("rudeness");
  });

  it(`Given the required props,
  If we Select certain option, do does it get selected`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps = {
      onChangeFilter: mockOnChange,
    };
    const event = { target: { value: "vegetables" } };

    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByTestId("midemeanoursFilter");

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("vegetables");
  });
});
