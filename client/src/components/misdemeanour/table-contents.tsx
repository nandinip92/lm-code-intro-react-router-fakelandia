import React from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import { TableContentRows } from "./table-content-rows";
import { v4 as uuidv4 } from "uuid";

export interface TableContentsProps {
  misdemeanours: Array<Misdemeanour>;
}

export const TableContents: React.FC<TableContentsProps> = ({
  misdemeanours,
}) => (
  <>
    <div className="misdeedsTable__contents">
      {misdemeanours.map((misdemeanour) => (
        <TableContentRows key={uuidv4()} misdemeanour={misdemeanour} />
      ))}
    </div>
  </>
);

{
  /* <>
<div className="table__row">
  <div className="wrapper">
    {filteredData.map((misdemeanour) => (
      <TableContentRows key={uuidv4()} misdemeanour={misdemeanour} />
    ))}
  </div>
</div>
</> */
}

// {
//     const filteredData = misdemeanours.filter((m) => m.misdemeanour === filter);
//     return (
//       <>
//         {filteredData.map((misdemeanour) => (
//           <TableContentRows key={uuidv4()} misdemeanour={misdemeanour} />
//         ))}
//       </>
//     );
//   };
