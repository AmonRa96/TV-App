import { useSelector } from 'react-redux';
import classes from "./Main.module.css"


function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + ("h ") : "";
  var mDisplay = m > 0 ? m + ("m ") : "";
  var sDisplay = s > 0 ? s + ("s") : "";
  return hDisplay + mDisplay + sDisplay; 
}


export const Main = () =>{
const movieInfo = useSelector((state)=>state.movieData.movieData)

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
      <div>{movieInfo.MpaRating}</div>
      <div>{secondsToHms(movieInfo.Duration)}</div>
    </div>
    <div className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Incidunt similique eveniet veritatis <br/>iusto iure optio commodi quia voluptas nobis at.</div>
    <div className={classes.buttons}>
      <button className={classes.playButton}> Play</button>
      <button className={classes.moreInfoButton}>More Info</button>
    </div>
</div>
)
}