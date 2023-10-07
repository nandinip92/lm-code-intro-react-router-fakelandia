import { validateSubject } from "./validate-fields";
describe("Subject textfield input test", () => {
  test(`Test to check if the given input into the text feild is invalid`, () => {
    const error =
      "Subject line must min of 5 characters and maximum of 15 characters";

    expect(validateSubject("hey!")).toEqual([false, error]);
    expect(validateSubject("heyyyyyyyyyyyyyyyyy!")).toEqual([false, error]);
  });
  test(`Test to check if the given input into the text feild is valid`, () => {
    expect(validateSubject("hello!")).toEqual([true, undefined]);
  });
});
