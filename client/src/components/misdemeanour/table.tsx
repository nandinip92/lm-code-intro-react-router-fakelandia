import React from "react";
import { useState } from "react";
import Filter from "./filter";
import { TableContents } from "./table-contents";
import { TableHeader } from "./table-header";

// interface TableProps {
//   misdemeanours: Array<Misdemeanour>;
// }
export const Table: React.FC = () => {
  const [filter, setFilter] = useState("no_filter");
  return (
    <>
      <div className="table">
        <Filter onChangeFilter={setFilter} />
        <TableHeader />
        <TableContents filter={filter} />
      </div>
    </>
  );
};
