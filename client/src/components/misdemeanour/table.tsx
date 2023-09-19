import React from "react";
import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import Filter from "./filter";
import { TableContents } from "./table-contents";
import { TableHeader } from "./table-header";

interface TableProps {
  misdemeanours: Array<Misdemeanour>;
}
export const Table: React.FC<TableProps> = ({ misdemeanours }) => {
  const [filter, setFilter] = useState("filter");
  return (
    <>
      <Filter onChangeFilter={setFilter} />
      <TableHeader />
      <TableContents misdemeanours={misdemeanours} filter={filter} />
    </>
  );
};
