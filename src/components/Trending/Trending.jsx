import data from "../../data.json";
import { Movie } from "./Movie/Movie";
import classes from "./Trending.module.css";
import { Splide } from '@splidejs/react-splide';


import '@splidejs/react-splide/css';

export const Trending = () =>{
  const movies = data.TrendingNow
   return (
    <div className={classes.trending}>
      <div className={classes.trendingHeader}>
      Trending Now
      </div>
      <div className={classes.swiper}>
      <Splide 
     options={ {
      rewind: true,
      width : "1700px",
      rewindByDrag: true,
      perPage: 8,
    
    } }
    >       
      {movies.map((m)=>{
          return <Movie img={m.CoverImage} key={m.Id} id={m.Id}/>
        })}
       
    </Splide>
       
      </div>
    </div>

)
}