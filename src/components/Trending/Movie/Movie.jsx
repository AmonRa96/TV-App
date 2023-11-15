import { SplideSlide } from "@splidejs/react-splide";
import { useDispatch } from "react-redux";
import { updateMovieData, showVideo } from "../../../store/movieDataSlice";

export const Movie = ({ img, id }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(updateMovieData(id));

    dispatch(showVideo(false));

    setTimeout(() => {
      dispatch(showVideo(true));
    }, 2000);
  };

  return (
    <SplideSlide onClick={handleClick}>
      <img src={require(`../../../assets/${img}`)} alt="img" />
    </SplideSlide>
  );
};
