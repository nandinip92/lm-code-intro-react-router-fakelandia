import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import {
  ReasonForConfession,
  ReasonForConfessionProps,
} from "../reason-for-confession";

describe("<ReasonForConfession/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Select DropDown box must be present`, () => {
    //Arrange
    const requiredProps: ReasonForConfessionProps = {
      reasonForConfession: "reason for contact",
      onChangeField: () => {},
    };
    //ACT
    render(<ReasonForConfession {...requiredProps} />);
    const input = screen.getByLabelText("Reason for Confession:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we Select certain option, do they get selected value`, () => {
    //Arrange
    const mockOnChange = jest.fn();
    const requiredProps: ReasonForConfessionProps = {
      reasonForConfession: "reason for contact",
      onChangeField: mockOnChange,
    };
    const event = { target: { value: "rudeness" } };
    //ACT
    render(<ReasonForConfession {...requiredProps} />);
    const input = screen.getByLabelText("Reason for Confession:");
    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("rudeness");
  });

  it(`Given the required props,
  If we Select certain option, do does it get selected`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: ReasonForConfessionProps = {
      reasonForConfession: "reason for contact",
      onChangeField: mockOnChange,
    };
    const event = { target: { value: "vegetables" } };

    //ACT
    render(<ReasonForConfession {...requiredProps} />);
    const input = screen.getByLabelText("Reason for Confession:");

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("vegetables");
  });
});
