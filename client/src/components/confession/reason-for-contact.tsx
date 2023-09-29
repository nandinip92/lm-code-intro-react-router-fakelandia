import React from "react";
import { useRef } from "react";
import { MisdemeanourKind } from "../../types/misdemeanour.types";

export interface ReasonForContactProps {
  reasonForContact: string | MisdemeanourKind;
  onChangeField: (newValue: string) => void;
}
export const ReasonForContact: React.FC<ReasonForContactProps> = ({
  reasonForContact,
  onChangeField,
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeField(event.target.value as MisdemeanourKind);
    return inputRef.current?.value as MisdemeanourKind;
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
            <option value="just-talk">I Just Want to Talk</option>
          </select>
        </div>
      </div>
    </>
  );
};
