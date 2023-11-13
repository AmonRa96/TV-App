import { useSelector } from 'react-redux';
import classes from "./Main.module.css"

export const Main = () =>{
const movieInfo = useSelector((state)=>state.movieData.movieData)
console.log(movieInfo,"mov")
  return (
<div className={classes.main}>
<span>
MOVIE
</span>
<div>
THE IRISHMAN
</div>
<div className={classes.movieInfo}>
<span>movieInfo.ReleaseYear</span>
<span>18+</span>
<span>1h 48m</span>
</div>
<div className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique eveniet veritatis iusto iure optio commodi quia voluptas nobis at.</div>
<div>
<button> Play</button>
<button>More Info</button>
</div>


</div>
)
}