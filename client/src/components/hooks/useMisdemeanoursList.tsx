import React, { useState, useEffect, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanour.types";
import { LoadingSpinner } from "../misdemeanour/loading-spinner";

export interface MisdemeanourContext {
  misdemeanours: Array<Misdemeanour>;
  setMisdemeanours: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
  //setMisdemeanours :(misdemeanours:Array<Misdemeanour>)=>void
}
interface MisdemeanoursListProviderProps {
  children: React.ReactNode;
}
const misdemeanourListContext = React.createContext<
  MisdemeanourContext | undefined
>(undefined);

export const MisdemeanoursListProvider: React.FC<
  MisdemeanoursListProviderProps
> = ({ children }) => {
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

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <misdemeanourListContext.Provider
          value={{ misdemeanours, setMisdemeanours }}
        >
          {children}
        </misdemeanourListContext.Provider>
      )}
    </>
  );
};

export const useMisdemeanoursList = () =>
  useContext(misdemeanourListContext) as MisdemeanourContext;
