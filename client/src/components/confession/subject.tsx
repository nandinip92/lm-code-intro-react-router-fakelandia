import { useState } from "react";
import { validateSubject } from "./validate/validate-fields";

export interface SubjectProps {
  subjectLine: string;
  onChangeField: (newValue: string) => void;
}
export const Subject: React.FC<SubjectProps> = ({
  subjectLine,
  onChangeField,
}) => {
  const [isChecking, setIsChecking] = useState(false); // This state is used for not to display the error message on first render
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isChecking) {
      const error = validateSubject(subjectLine);
      if (error !== undefined) {
        setErrorMessage(error[1]);
      }
    }
    setIsChecking(true);
    return onChangeField(event.target.value);
  };
  return (
    <>
      <div className="confessions__row">
        <label className="confessions tag" htmlFor="subject">
          Subject:
        </label>
        <input
          className="confessions subject"
          id="subject"
          type="text"
          value={subjectLine}
          onChange={(event) => handleChange(event)}
        />
        {errorMessage !== undefined && (
          <p className="errorMessages">{errorMessage}</p>
        )}
      </div>
    </>
  );
};
