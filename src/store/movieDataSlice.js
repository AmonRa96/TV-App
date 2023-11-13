import { createSlice, current } from "@reduxjs/toolkit";
import data from "../data.json"

console.log(data,"daata")



const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    movieData: data.Featured,
  },
  reducers: {
    updatemovieData(state,action){
		if(state.movieData.Id === action.payload){
      
		}
		
	}
   }
});

export const { savemovieData, updatemovieData } = movieDataSlice.actions;
export default movieDataSlice.reducer;