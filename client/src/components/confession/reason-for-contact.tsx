import React from "react";
import { useRef } from "react";

export interface ReasonForContactProps {
  reasonForContact: string;
  onChangeField: (newValue: string) => void;
}
export const ReasonForContact: React.FC<ReasonForContactProps> = ({
  reasonForContact,
  onChangeField,
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log("Reason--->", inputRef.current?.value);
    // console.log("eventValue--->", event.target.value);

    onChangeField(event.target.value);
    return inputRef.current?.value;
  };
  return (
    <>
      <div className="confessions__row">
        <div className="confession_rowWrapper">
          <label className="confessions tag" htmlFor="confession">
            Reason for Confession:{" "}
          </label>
          <select
            ref={inputRef}
            className="confessions dropDown"
            id="confession"
            defaultValue={reasonForContact}
            onChange={(event) => handleClick(event)}
          >
            <option value="reason for confession" disabled>
              Reason for Confession
            </option>
            <option value="rudeness">Rudeness</option>
            <option value="vegetables">Vegetables</option>
            <option value="lift">Lift</option>
            <option value="united">united</option>
            <option value="I just want to talk">I Just Want to Talk</option>
          </select>
        </div>
      </div>
    </>
  );
};
