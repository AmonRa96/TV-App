import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

import { getStorageParsedData } from "../utils";

import { STORAGE_KEY } from "../constants";

const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    movieData: getStorageParsedData(STORAGE_KEY) || data.Featured,
    movieList: [],
    movieOn: false,
  },
  reducers: {
    updateMovieData: (state, { payload }) => {
      const activeMovie = data.TrendingNow.find(({ Id }) => Id === payload);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(activeMovie));
      state.movieData = activeMovie;
    },
    showVideo: (state, { payload }) => {
      state.movieOn = payload;
    },

    sortedData: (state) => {
      const storeData = getStorageParsedData(STORAGE_KEY);

      if (storeData) {
        const filter = data.TrendingNow.filter(({ Id }) => Id !== storeData.Id);

        filter.unshift(storeData);

        state.movieList = filter;
      } else {
        state.movieList = data.TrendingNow;

        return;
      }
    },
  },
});

export const { updateMovieData, showVideo, sortedData } =
  movieDataSlice.actions;
export default movieDataSlice.reducer;
