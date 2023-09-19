import React from "react";
import { useState, useEffect } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import { Table } from "./table";

export const FilterContext = React.createContext(false);

export const MisdemeanourPage: React.FC = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

  useEffect(() => {
    const getMisdemeanours = async (amount: number) => {
      const apiResponse = await fetch(
        `http://localhost:8080/api/misdemeanours/${amount}`
      );
      if (isFetching) {
        const json = (await apiResponse.json()) as {
          misdemeanours: Misdemeanour[];
        };
        // console.log("<--- Misdemeanour JSON --->\n", json.misdemeanours);
        setIsFetching(false);
        setMisdemeanours(json.misdemeanours);
      }
    };
    getMisdemeanours(30);
    console.log("<--- misdemeanours --->", misdemeanours);
  });

  return (
    <div className="table">
      <Table misdemeanours={misdemeanours} />
    </div>
  );
};
