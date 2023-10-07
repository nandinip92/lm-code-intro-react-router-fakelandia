import React, { useRef } from "react";
//import { Misdemeanour } from "../../types/misdemeanour.types";

// export interface FilterProps {
//   inputRef: React.RefObject<HTMLSelectElement>;
// }

const Filter: React.FC<{ onChangeFilter: (newValue: string) => void }> = ({
  onChangeFilter,
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Filter Value--->", inputRef.current?.value);
    console.log("eventValue--->", event.target.value);
    onChangeFilter(event.target.value);
    return inputRef.current?.value;
  };
  return (
    <>
      <div className="table__row">
        <div className="table__column table__column--citizenId" />
        <div className="table__column table__column--date" />
        <select
          ref={inputRef}
          className="table__column table__column--misdemeanour"
          data-testid="midemeanoursFilter"
          defaultValue="no_filter"
          onChange={(event) => handleClick(event)}
        >
          <option value="no_filter">NoFilter</option>
          <option value="rudeness">Rudeness</option>
          <option value="vegetables">Vegetables</option>
          <option value="lift">Lift</option>
          <option value="united">united</option>
        </select>
        <div className="table__column table__column--punishmentIdea" />
      </div>
    </>
  );
};

export default Filter;
