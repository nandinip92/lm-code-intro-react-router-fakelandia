import React from "react";

export interface FilterProps {
  dropDownValue: string;
  onChangeSelect: (newValue: string) => void;
}

const Filter: React.FC<FilterProps> = ({ dropDownValue, onChangeSelect }) => {
  return (
    <>
      <div className="table__row">
        <div className="wrapper">
          <div className="column citizenId" />
          <div className="column date" />
          <select
            className="column misdemeanour"
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
          <div className="column punishmentIdea" />
        </div>
      </div>
    </>
  );
};

export default Filter;
