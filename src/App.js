import './App.css';
import { Main } from './components/Main/Main';
import { Nav } from './components/Nav/Nav';
import { Trending } from './components/Trending/Trending';
import cover from "./assets/cover.png"

function App() {
  return (

    <div className="App">
    <img src={cover} alt="cover" className='img'/>
    <Nav />
    <div className="page">
    <Main />
    <Trending />  
    </div>     
    </div>
  );
}

export default App;
