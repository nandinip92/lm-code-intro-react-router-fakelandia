import React from "react";

export interface FilterProps {
  dropDownValue: string;
  onChangeSelect: (newValue: string) => void;
}

const Filter: React.FC<FilterProps> = ({ dropDownValue, onChangeSelect }) => {
  return (
    <>
      <div className="misdeedsTable__filter">
        <select
          id="midemeanoursFilter"
          defaultValue={dropDownValue}
          onChange={(event) => onChangeSelect(event.target.value)}
        >
          <option value="filter" disabled>
            Filter
          </option>
          <option value="rudeness">Rudeness</option>
          <option value="vegetables">Vegetables</option>
          <option value="lift">Lift</option>
          <option value="united">united</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
