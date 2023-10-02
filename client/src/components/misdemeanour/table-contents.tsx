import React from "react";
import { TableContentRows } from "./table-content-rows";
import { v4 as uuidv4 } from "uuid";
import { useMisdemeanoursList } from "../hooks/useMisdemeanoursList";

export interface TableContentsProps {
  filter: string;
}

export const TableContents: React.FC<TableContentsProps> = ({ filter }) => {
  const { misdemeanours } = useMisdemeanoursList();
  //Since we are pulling 10 records from the server initially, the rest of the records are considered as self-confessed data from the confessions page
  const selfConfessedMisdemeanour = misdemeanours
    .slice(10)
    .map((misdeed) => misdeed.citizenId);
  const records =
    filter !== "no_filter"
      ? misdemeanours.filter((m) => m.misdemeanour === filter)
      : misdemeanours;

  //'selfConfessed' an optional attribute to differentiate between the self-confessed data recieved from the confession page and the data retrieved from the server
  return (
    <>
      <div className="misdeedsTable__contents">
        {records.map((misdemeanour) =>
          selfConfessedMisdemeanour.includes(misdemeanour.citizenId) ? (
            <TableContentRows
              key={uuidv4()}
              misdemeanour={misdemeanour}
              selfConfessed={true}
            />
          ) : (
            <TableContentRows key={uuidv4()} misdemeanour={misdemeanour} />
          )
        )}
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
import { useContext } from "react";
import { MisdemeanourContext } from "../../types/misdemeanour.types";
import { TableContentRows } from "./table-content-rows";
import { v4 as uuidv4 } from "uuid";
//import { misdemeanourListContext } from "../router/router";
import { misdemeanourListContext } from "../layouts/main_layouts";

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
*/
