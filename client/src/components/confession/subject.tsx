import React from "react";
import { useRef } from "react";

export interface SubjectProps {
  subjectLine: string;
  onChangeField: (newValue: string) => void;
}
export const Subject: React.FC<SubjectProps> = ({
  subjectLine,
  onChangeField,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeField(event.target.value);
    return inputRef.current?.value;
  };
  return (
    <>
      <div className="confessions__row">
        <div className="confession_rowWrapper">
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
        </div>
      </div>
    </>
  );
};
