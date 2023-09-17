import React, { useEffect } from "react";
import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import Filter from "./filter";

export const MisdemeanourPage: React.FC = () => {
  //const [loadData, setLoadData] = useState(0);
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const [filter, setFilter] = useState("Filter");

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
    getMisdemeanours(1);
    console.log("<--- misdemeanours --->", misdemeanours);
  });

  return (
    <div className="misdeedsTable">
      <Filter dropDownValue={filter} onChangeSelect={setFilter} />

      <div className="misdeedsTable__header">
        <h2> Citizen ID</h2>
        <h2>Date</h2>
        <h2>Misdemeanour</h2>
        <h2>Punishment Idea</h2>
      </div>
      <div className="misdeedsTable__contents"></div>
    </div>
  );
};
