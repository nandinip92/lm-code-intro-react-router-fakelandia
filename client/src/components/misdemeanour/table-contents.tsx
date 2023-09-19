import React from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import { TableContentRows } from "./table-content-rows";
import { v4 as uuidv4 } from "uuid";

export interface TableContentsProps {
  misdemeanours: Array<Misdemeanour>;
  filter: string;
}

export const TableContents: React.FC<TableContentsProps> = ({
  misdemeanours,
  filter,
}) => {
  //console.log("---TableContents---", filter);

  const records =
    filter !== "filter"
      ? misdemeanours.filter((m) => m.misdemeanour === filter)
      : misdemeanours;
  return (
    <>
      <div className="misdeedsTable__contents">
        {records.map((misdemeanour) => (
          <TableContentRows key={uuidv4()} misdemeanour={misdemeanour} />
        ))}
      </div>
    </>
  );
};
