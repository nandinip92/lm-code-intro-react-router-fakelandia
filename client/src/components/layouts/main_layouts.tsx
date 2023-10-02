import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Footer } from "../footer/footer";
import { MisdemeanoursListProvider } from "../hooks/useMisdemeanoursList";

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="fakelandiaMain">
        <MisdemeanoursListProvider>
          <Outlet />
        </MisdemeanoursListProvider>
      </main>

      <Footer />
    </>
  );
};

/*
************************************************************************
* Following is the code used when I have created the useContext inside *
* the main-layout component                                            *            
************************************************************************

import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Footer } from "../footer/footer";
import React from "react";
import { useState, useEffect } from "react";
import {
  Misdemeanour,
  MisdemeanourContext,
} from "../../types/misdemeanour.types";
import { LoadingSpinner } from "../misdemeanour/loading-spinner";

export const misdemeanourListContext = React.createContext<
  MisdemeanourContext | undefined
>(undefined);

export const MainLayout = () => {
  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const [isFetching, setIsFetching] = useState(true);

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

  // return <div>{isFetching ? <LoadingSpinner /> : <Table />}</div>;

  return (
    <>
      <Header />
      <misdemeanourListContext.Provider
        value={{ misdemeanours, setMisdemeanours }}
      >
        <main className="fakelandiaMain">
          {isFetching ? <LoadingSpinner /> : <Outlet />}
        </main>
      </misdemeanourListContext.Provider>
      <Footer />
    </>
  );
};
*/
