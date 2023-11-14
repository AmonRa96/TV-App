import './App.css';
import { Main } from './components/Main/Main';
import { Nav } from './components/Nav/Nav';
import { Trending } from './components/Trending/Trending';
import { useSelector } from 'react-redux';
import {useEffect} from "react";

function App() {
const movieInfo = useSelector((state)=>state.movieData.movieData);
const playerOn =  useSelector((state)=>state.movieData.movieOn.payload);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(movieInfo));
  }, [movieInfo]);



  return (
    <div className="App">
      {playerOn
      ?
        <video className='img' autoPlay>
        <source src={movieInfo.VideoUrl}/>
        </video>
      :
        <img src={require(`./assets/${movieInfo.CoverImage}`)} alt="cover" className='img'/>
      }
        <Nav />
      <div className="page">
        <Main />
        <Trending />  
      </div>     
    </div>
  );
}

export default App;
