import { render, screen } from "@testing-library/react";
import { Confession } from "../confession";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

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
    const button = screen.getByRole("button");
    //Assert
    expect(button).toBeDisabled();
    expect(input).toBeDisabled();
  });
  it(`Given the required props, 
      when the component is rendered, 
      then button is disabled `, async () => {
    //Act
    render(<Confession />);
    const input = screen.getByLabelText("Subject:");
    //Information related to act: https://legacy.reactjs.org/docs/testing-recipes.html#act
    await act(async () => await userEvent.type(input, "Helloooo...!!!"));
    const reasonsInput = screen.getByLabelText("Reason for Confession:");
    await act(
      async () => await userEvent.selectOptions(reasonsInput, "vegetables")
    );
    const button = screen.getByRole("button");
    //Assert
    expect(button).toBeEnabled();
  });

  it(`When the component is rendered and
       Given Subject is not valid, it should display 
       an error message on screen and button is disabled `, async () => {
    //Act
    render(<Confession />);

    const input = screen.getByLabelText("Subject:");
    await act(async () => await userEvent.type(input, "Hi")); //https://legacy.reactjs.org/docs/testing-recipes.html#act
    const error =
      "Subject line must min of 5 characters and maximum of 15 characters";
    const errorElement = screen.getByText(error);

    const button = screen.getByRole("button");
    //Assert
    expect(errorElement).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
