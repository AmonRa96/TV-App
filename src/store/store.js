import { configureStore } from "@reduxjs/toolkit";
import movieDataReducer from "./movieDataSlice";
import logger from 'redux-logger'


export default configureStore({
  reducer: {
    movieData: movieDataReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
