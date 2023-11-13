import { createSlice, current } from "@reduxjs/toolkit";



const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    movieData: [
    {
		"Id": "1",
		"Title": "The Irishman",
		"CoverImage": "FeaturedCoverImage.png",
		"TitleImage": "FeaturedTitleImage.png",
		"Date": "2021-10-24T12:16:50.894556",
		"ReleaseYear": "2021",
		"MpaRating": "18+",
		"Category": "Movie",
		"Duration": "6000",
		"Description": "Info About it"
	}
    ],
  },
  reducers: {

   }
});

export const { savemovieData, updatemovieData } = movieDataSlice.actions;
export default movieDataSlice.reducer;