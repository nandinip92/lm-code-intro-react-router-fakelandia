import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Subject, SubjectProps } from "../subject";

describe("<Subject/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then Subject label must be present`, () => {
    //Arrange
    const requiredProps: SubjectProps = {
      subjectLine: "",
      onChangeField: () => {},
    };
    //ACT
    render(<Subject {...requiredProps} />);
    const input = screen.getByLabelText("Subject:");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    const requiredProps: SubjectProps = {
      subjectLine: "Hello",
      onChangeField: () => {},
    };
    //ACT
    render(<Subject {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Subject:");
    expect(input.value).toBe("Hello"); // to test input value
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its 'onChange' function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = vi.fn();
    const requiredProps: SubjectProps = {
      subjectLine: "",
      onChangeField: mockOnChange,
    };
    const event = { target: { value: "I need to vent out my anger" } };
    //Act
    render(<Subject {...requiredProps} />);
    const input = screen.getByLabelText<HTMLInputElement>("Subject:");

    fireEvent.change(input, event); //// triggers onChange event
    expect(mockOnChange).toBeCalledTimes(1); //to ensure that a mock function got called exact number of times.
    expect(mockOnChange).toBeCalledWith("I need to vent out my anger"); // tests if onChange handler is called with proper value
  });
});
