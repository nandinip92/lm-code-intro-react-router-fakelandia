import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Filter, { FilterProps } from "./filter";

describe("<Filter/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Select DropDown box must be present`, () => {
    //Arrange
    const requiredProps: FilterProps = {
      dropDownValue: "",
      onChangeSelect: () => {},
    };
    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByRole("select");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we Select certain option, do they get selected value`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps: FilterProps = {
      dropDownValue: "rudeness",
      onChangeSelect: mockOnChange,
    };
    const event = { target: { value: "rudeness" } };
    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByRole<HTMLInputElement>("option");
    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("rudeness");
  });

  it(`Given the required props,
  If we Select certain option, do does it get selected`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: FilterProps = {
      dropDownValue: "",
      onChangeSelect: mockOnChange,
    };
    const event = { target: { value: "vegetables" } };

    //ACT
    render(<Filter {...requiredProps} />);
    const input = screen.getByRole<HTMLInputElement>("option");

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("vegetables");
    fireEvent.select(input, event);
    expect(mockOnChange).toBe(true);
  });
});
