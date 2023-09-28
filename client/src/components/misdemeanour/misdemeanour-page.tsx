import React, { useContext } from "react";
import { useState, useEffect } from "react";
import {
  Misdemeanour,
  MisdemeanourContext,
} from "../../types/misdemeanour.types";
import { Table } from "./table";
import { LoadingSpinner } from "./loading-spinner";
import { misdemeanourListContext } from "../router/router";

// export const FilterContext = React.createContext(false);
// export const misdemeanourListContext = React.createContext<Array<Misdemeanour>>(
//   []
// );

export const MisdemeanourPage: React.FC = () => {
  const [isFetching, setIsFetching] = useState(true);
  // const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const { misdemeanours, setMisdemeanours } = useContext(
    misdemeanourListContext
  ) as MisdemeanourContext;

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
    getMisdemeanours(10);

    console.log("<--- misdemeanours --->", misdemeanours);
  });

  return <div>{isFetching ? <LoadingSpinner /> : <Table />}</div>;
};

{
  /* <misdemeanourListContext.Provider value={misdemeanours}>
<Table />
</misdemeanourListContext.Provider> */
}
