import {  createSlice } from "@reduxjs/toolkit";
import data from "../data.json"


console.log(data,"daata")

const item = localStorage.getItem("data");
const parsedItem = JSON.parse(item);

const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    movieData: parsedItem || data.Featured,
    movieOn: false
  },
  reducers: {
    updateMovieData: (state,action)=>{
    const a = data.TrendingNow.filter((obj)=>obj.Id === action.payload);
    state.movieData = a[0];  
   
    },

    showVideo: (state, action) => {
       state.movieOn=action  
    }
   }
   
});

export const { updateMovieData, showVideo } = movieDataSlice.actions;
export default movieDataSlice.reducer;