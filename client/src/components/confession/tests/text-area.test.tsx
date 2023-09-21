import { render, screen } from "@testing-library/react";
import { TextAreaProps } from "../text-area";
import { fireEvent } from "@testing-library/react";
import { TextArea } from "../text-area";

describe("<TextArea/>", () => {
  it(`Given the required props, 
    when the component is rendered, 
    then text area box must be present`, () => {
    //Arrange
    const requiredProps: TextAreaProps = {
      textArea: "",
      onChangeTextArea: () => {},
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByTestId("confessionsTextArea");

    //Assert
    expect(input).toBeInTheDocument();
  });

  it(`Given the required props,
  If we give input fields certain values through props, do they display that value?`, () => {
    //Arrange
    const requiredProps: TextAreaProps = {
      textArea: "Hellooo I donot like you!",
      onChangeTextArea: () => {},
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByTestId<HTMLTextAreaElement>(
      "confessionsTextArea"
    );

    expect(input.value).toEqual("Hellooo I donot like you!");
  });

  it(`Given the required props,
  when the text is typed in the text box, 
  input field should call its onChange function and pass it the correct parameters`, () => {
    ///Arrange
    const mockOnChange = jest.fn();
    const requiredProps: TextAreaProps = {
      textArea: "",
      onChangeTextArea: mockOnChange,
    };

    const event = {
      target: { value: "Hellooo I am not fine " },
    };
    //ACT
    render(<TextArea {...requiredProps} />);
    const input = screen.getByTestId<HTMLTextAreaElement>(
      "confessionsTextArea"
    );

    fireEvent.change(input, event);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(event.target.value);
  });
});
