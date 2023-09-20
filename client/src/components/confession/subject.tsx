import React from "react";

export interface SubjectProps {
  subjectLine: string;
  onChangeField: (newValue: string) => void;
}
export const Subject: React.FC<SubjectProps> = ({
  subjectLine,
  onChangeField,
}) => (
  <>
    <label className="confessions tag" htmlFor="subject">
      Subject:
    </label>
    <input
      className="confessions subject"
      id="subject"
      type="text"
      value={subjectLine}
      onChange={(event) => onChangeField(event.target.value)}
    />{" "}
  </>
);
