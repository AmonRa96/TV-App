import {  SplideSlide } from '@splidejs/react-splide';
import { useDispatch } from 'react-redux';
import { updateMovieData, showVideo } from '../../../store/movieDataSlice';
import classes from "./Movie.module.css"

export const Movie = ({img,id}) =>{
const dispatch = useDispatch()
    return (
      <SplideSlide className={classes.movie} onClick={(e)=>{
       e.preventDefault();
      dispatch(updateMovieData(id));
      dispatch(showVideo(false))

      setTimeout(() => {
        dispatch(showVideo(true))
      }, 2000)
      }}>
          <img src={require(`../../../assets/${img}`)} alt="img" />
         
       </SplideSlide> 
    )
}