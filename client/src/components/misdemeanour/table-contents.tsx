import React from "react";
import { useContext } from "react";
import { MisdemeanourContext } from "../../types/misdemeanour.types";
import { TableContentRows } from "./table-content-rows";
import { misdemeanourListContext } from "../router/router";
import { v4 as uuidv4 } from "uuid";

export interface TableContentsProps {
  filter: string;
}

export const TableContents: React.FC<TableContentsProps> = ({ filter }) => {
  //console.log("---TableContents---", filter);
  const { misdemeanours } = useContext(
    misdemeanourListContext
  ) as MisdemeanourContext;

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
