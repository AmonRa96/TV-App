import { useSelector } from 'react-redux';
import classes from "./Main.module.css";
import { secondsToHms } from "../../utils";


export const Main = () =>{
const movieInfo = useSelector((state)=>state.movieData.movieData);

  return (
  <div className={classes.main}>
    <div className={classes.category}>
      {movieInfo.Category.toUpperCase()}
    </div>
    <div>
      <img src={require(`../../assets/${movieInfo.TitleImage}`)} alt='jj'/>
    </div>
    <div className={classes.movieInfo}>
      <div>{movieInfo.ReleaseYear}</div>
      <div className={classes.rating}>{movieInfo.MpaRating}</div>
      <div className={classes.duration}>{secondsToHms(movieInfo.Duration)}</div>
    </div>
    <div className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Incidunt similique eveniet veritatis<br/>iusto iure optio commodi quia voluptas nobis at.</div>
    <div className={classes.buttons}>
      <button className={classes.playButton}> Play</button>
      <button className={classes.moreInfoButton} 
              onClick={()=>localStorage.clear()}>
        More Info
      </button>
    </div>
  </div>
)
}