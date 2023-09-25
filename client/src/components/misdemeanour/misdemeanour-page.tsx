import React from "react";
import { useState, useEffect } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import { Table } from "./table";
import { LoadingSpinner } from "./loading-spinner";

export const FilterContext = React.createContext(false);

export const MisdemeanourPage: React.FC = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

  useEffect(() => {
    const getMisdemeanours = async (amount: number) => {
      try {
        const apiResponse = await fetch(
          `http://localhost:8080/api/misdemeanours/${amount}`
        );
        if (isFetching) {
          const json = (await apiResponse.json()) as {
            misdemeanours: Misdemeanour[];
          };
          setMisdemeanours(json.misdemeanours);
        }
        setIsFetching(false);
        // console.log("isLoading...", isFetching);
      } catch (error) {
        setIsFetching(false);
        console.log(error);
      }
    };
    getMisdemeanours(20);

    console.log("<--- misdemeanours --->", misdemeanours);
  });

  return (
    <div>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <Table misdemeanours={misdemeanours} />
      )}
    </div>
  );
};

{
  /* </div>
    <div className="table">
      <Table misdemeanours={misdemeanours} />
    </div> */
}
