import { useSelector } from "react-redux";
import classes from "./Main.module.css";
import { secondsToHms } from "../../utils";

export const Main = () => {
  const {
    category,
    TitleImage,
    ReleaseYear,
    MpaRating,
    Duration,
    Description,
  } = useSelector((state) => state.movieSlice.movieData);

  return (
    <div className={classes.main}>
      <div className={classes.category}>{category}</div>
      <div>
        <img src={require(`../../assets/${TitleImage}`)} alt="new thing" />
      </div>
      <div className={classes.movieInfo}>
        <div>{ReleaseYear}</div>
        <div>{MpaRating}</div>
        <div>{secondsToHms(Duration)}</div>
      </div>
      <div className={classes.description}>{Description}</div>
      <div>
        <button className={classes.playButton}>Play</button>
        <button
          className={classes.moreInfoButton}
          onClick={() => localStorage.clear()}
        >
          More Info
        </button>
      </div>
    </div>
  );
};
