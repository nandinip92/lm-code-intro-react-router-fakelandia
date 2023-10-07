import { useMisdemeanoursList } from "../hooks/useMisdemeanoursList";

export const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanoursList();
  const confessionsToday = misdemeanours.length - 10;
  return (
    <>
      <div className="cards__wrapper">
        <div className="card">
          <p className="card__text">
            Total misdemeanours: {misdemeanours.length}
          </p>
        </div>
        <div className="card">
          <p className="card__text">
            Number of confessions recieved today: {confessionsToday}
          </p>
        </div>
      </div>
    </>
  );
};
