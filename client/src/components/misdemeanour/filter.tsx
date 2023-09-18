import { useRef } from "react";

// export interface FilterProps {
//   dropDownValue: string;
//   onChangeSelect: (newValue: string) => void;
// }

const Filter: React.FC = () => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const handleClick = () => {
    console.log("Filter Value--->", inputRef.current?.value);
    return inputRef.current?.value;
  };
  return (
    <>
      <div className="table__row">
        <div className="wrapper">
          <div className="column citizenId" />
          <div className="column date" />
          <select
            ref={inputRef}
            className="column misdemeanour"
            id="midemeanoursFilter"
            defaultValue="filter"
            onChange={handleClick}
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
