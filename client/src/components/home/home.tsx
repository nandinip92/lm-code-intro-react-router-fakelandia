import { useContext } from "react";
import { MisdemeanourContext } from "../../types/misdemeanour.types";
import { misdemeanourListContext } from "../layouts/main_layouts";
export const Home: React.FC = () => {
  const { misdemeanours } = useContext(
    misdemeanourListContext
  ) as MisdemeanourContext;
  const confessionsToday = misdemeanours.length - 10;
  return (
    <>
      <h2 className="homePage">Total misdemeanours: {misdemeanours.length}</h2>
      <h2 className="homePage">
        Number of confessions recieved today: {confessionsToday}
      </h2>
    </>
  );
};
