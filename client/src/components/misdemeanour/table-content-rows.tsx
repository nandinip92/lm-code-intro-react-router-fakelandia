import React from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";

export interface TableContentRows {
  misdemeanour: Misdemeanour;
  selfConfessed?: boolean; //flag to check if the data is from server or from the Confession page
}
export const TableContentRows: React.FC<TableContentRows> = ({
  misdemeanour,
  selfConfessed,
}) => {
  let rowName = "table__row";
  if (selfConfessed) rowName = "table__row--selfConfession";
  return (
    <>
      <div className={rowName}>
        <div className="wrapper">
          <div className="column citizenId">{misdemeanour.citizenId}</div>
          <div className="column date">{misdemeanour.date}</div>
          <div className="column misdemeanour">{misdemeanour.misdemeanour}</div>
          <div className="column punishmentIdea">
            <img src="https://picsum.photos/100" />
          </div>
        </div>
      </div>
    </>
  );
};

/*
********************************************************************************************************************************
* Following code is used when displaying data fetched from server onto the misdemeanours page.                                 *
* Handlining the self Confessed data on the Confession page from client-side as of now, so commenting this code for time being *
********************************************************************************************************************************
import React from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";

export interface TableContentRows {
  misdemeanour: Misdemeanour;
}
export const TableContentRows: React.FC<TableContentRows> = ({
  misdemeanour,
}) => {
  return (
    <>
      <div className="table__row">
        <div className="wrapper">
          <div className="column citizenId">{misdemeanour.citizenId}</div>
          <div className="column date">{misdemeanour.date}</div>
          <div className="column misdemeanour">{misdemeanour.misdemeanour}</div>
          <div className="column punishmentIdea">
            <img src="https://picsum.photos/100" />
          </div>
        </div>
      </div>
    </>
  );
};
*/
