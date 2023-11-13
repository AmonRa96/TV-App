import {  SplideSlide } from '@splidejs/react-splide';
import classes from "./Movie.module.css"

export const Movie = ({img,id}) =>{
    return (
      <SplideSlide className={classes.movie}>
          <img src={require(`../../../assets/${img}`)} alt="img"/>
         
       </SplideSlide> 
    )
}