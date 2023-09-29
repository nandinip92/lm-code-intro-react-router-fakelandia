import React from "react";

import { Table } from "./table";

export const MisdemeanourPage: React.FC = () => {
  return <Table />;
};

/*
**************************************************************************************************************************************
* Following code is when I have used useEffect to fetch the latest data from the server on every render                              * 
* And saved into misdemeanours property of misdemeanourListContext.                                                                  *
* As current server generates random data on every render,handlining the self Confessed data from the Confession page on client-side *
* So commenting this code for time being                                                                                             *
**************************************************************************************************************************************

import { useState, useEffect, useContext } from "react";
import {
  Misdemeanour,
  MisdemeanourContext,
} from "../../types/misdemeanour.types";
import { LoadingSpinner } from "./loading-spinner";
import { misdemeanourListContext } from "../router/router";

export const MisdemeanourPage: React.FC = () => {
  const [isFetching, setIsFetching] = useState(true);
  const { misdemeanours, setMisdemeanours } = useContext(
    misdemeanourListContext
  ) as MisdemeanourContext;

  useEffect(() => {
    console.log("******useEfecct Triggered*******");
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
*/
