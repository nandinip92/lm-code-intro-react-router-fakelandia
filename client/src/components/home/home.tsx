import { useMisdemeanoursList } from "../hooks/useMisdemeanoursList";

export const Home: React.FC = () => {
  const { misdemeanours } = useMisdemeanoursList();
  const confessionsToday =
    misdemeanours.length == 0 ? 0 : misdemeanours.length - 10;
  return (
    <>
      <p className="homepage-intro">
        {`Fakelandia is a happy place with a low crime rate, 
          but it's important to each citizen that justice is seen to be served.
          
          This website helps the Fakelandians to browse lists of crimes committed today, 
          and also for functionality that helps citizens confess to their own crimes.`}
      </p>
      <p className="homepage-intro">
        As a non-citizen, you might not be aware that there are only four
        possible crimes in Fakelandia:
        <li>Mild Public Rudeness - 🤪</li>
        <li>Speaking in a Lift - 🗣</li>
        <li>Not Eating Your Vegetables - 🥗</li>
        <li>Supporting Manchester United - 😈</li>
      </p>
      <p className="homepage-intro">
        Despite the clear severity of some of these awful crimes, the
        Fakelandians refer to them all as "misdemeanours"
      </p>
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
