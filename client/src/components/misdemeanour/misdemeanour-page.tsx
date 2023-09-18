import React from "react";
import { useState, useEffect, useRef } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import Filter from "./filter";
import { TableContents } from "./table-contents";
import { TableHeader } from "./table-header";

export const MisdemeanourPage: React.FC = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  //const inputRef = useRef<HTMLSelectElement>(null);

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
      {/* <Filter dropDownValue={filter} onChangeSelect={setFilter} /> */}
      <Filter />
      <TableHeader />
      <TableContents misdemeanours={misdemeanours} />
      {/* <div className="misdeedsTable__contents">
        {misdemeanours.map((misdemeanour) => (
          <TableContents misdemeanour={misdemeanour} />
        ))} */}
    </div>
  );
};
