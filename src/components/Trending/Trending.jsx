import { Movie } from "./Movie/Movie";
import classes from "./Trending.module.css";
import { Splide } from "@splidejs/react-splide";
import { useSelector } from "react-redux";
import "@splidejs/react-splide/css";

export const Trending = () => {
  const movies = useSelector((state) => state.movieSlice.movieList);

  return (
    <div className={classes.trending}>
      <div className={classes.trendingHeader}>Trending Now</div>
      <div className={classes.swiper}>
        <Splide
          options={{
            rewind: true,
            rewindByDrag: true,
            height: "300px",
            width: "100%",
            perPage: 8,
            arrows: false,
          }}
        >
          {movies.map(({ CoverImage, Id }) => (
            <Movie key={Id} img={CoverImage} id={Id} />
          ))}
        </Splide>
      </div>
    </div>
  );
};
