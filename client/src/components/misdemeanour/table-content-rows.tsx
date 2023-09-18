import React from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";

export interface TableContentRows {
  misdemeanour: Misdemeanour;
}
export const TableContentRows: React.FC<TableContentRows> = ({
  misdemeanour,
}) => {
  const height = 1;
  const width = 1;
  return (
    <>
      <div className="table__row">
        <div className="wrapper">
          <div className="column citizenId">{misdemeanour.citizenId}</div>
          <div className="column date">{misdemeanour.date}</div>
          <div className="column misdemeanour">{misdemeanour.misdemeanour}</div>
          <div className="column punishmentIdea">
            <img src="https://picsum.photos/200" />;
          </div>
        </div>
      </div>
    </>
  );
};
