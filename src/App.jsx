import "./App.css";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { Trending } from "./components/Trending/Trending";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { sortedData } from "./store/movieDataSlice";

function App() {
  const { movieOn, movieData } = useSelector((state) => state.movieSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortedData());
  }, []);

  return (
    <div className="app">
      {movieOn ? (
        <video className="img" autoPlay>
          <source src={movieData.VideoUrl} />
        </video>
      ) : (
        <img
          src={require(`./assets/${movieData.CoverImage}`)}
          alt="cover"
          className="img"
        />
      )}
      <Nav />
      <div className="page">
        <Main />
        <Trending />
      </div>
    </div>
  );
}

export default App;
