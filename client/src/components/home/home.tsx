import { useMisdemeanoursList } from "../hooks/useMisdemeanoursList";

export const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanoursList();
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
