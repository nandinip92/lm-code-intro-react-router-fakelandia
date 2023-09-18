import React, { useEffect } from "react";
import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import Filter from "./filter";
import { TableContents } from "./table-contents";

export const MisdemeanourPage: React.FC = () => {
  //const [loadData, setLoadData] = useState(0);
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const [filter, setFilter] = useState("filter");

  useEffect(() => {
    const getMisdemeanours = async (amount: number) => {
      const apiResponse = await fetch(
        `http://localhost:8080/api/misdemeanours/${amount}`
      );

      const json = (await apiResponse.json()) as {
        misdemeanours: Misdemeanour[];
      };
      // console.log("<--- Misdemeanour JSON --->\n", json.misdemeanours);
      setMisdemeanours(json.misdemeanours);
    };
    getMisdemeanours(30);
    console.log("<--- misdemeanours --->", misdemeanours);
  }, [filter]);

  return (
    <div className="table">
      <Filter dropDownValue={filter} onChangeSelect={setFilter} />

      <div className="table__row table__row--header">
        <div className="wrapper">
          <div className="column citizenId"> Citizen_Id</div>
          <div className="column date">Date</div>
          <div className="column misdemeanour">Misdemeanour</div>
          <div className="column punishmentIdea">Punishment Idea</div>
        </div>
      </div>
      <div className="misdeedsTable__contents">
        <TableContents misdemeanours={misdemeanours} filter={filter} />
        {/* <div className="misdeedsTable__contents">
        {misdemeanours.map((misdemeanour) => (
          <TableContents misdemeanour={misdemeanour} />
        ))} */}
      </div>
    </div>
  );
};
