import Banner from './Banner/Banner';
import Card from './Card/Card';
import { movies, orginals, teenShows, topRated, trending, upComing } from './Constants/Urls';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/> 
       <Banner /> 
      <Card url={upComing} title={"UpComing"} />
      <Card url={trending} title={"Trending"} isSmall/>
      <Card url={topRated} title={"Top Rated"} isSmall/>
      <Card url={teenShows} title={"Teen Shows"} isSmall/>
      <Card url={orginals} title={"Popular"} isSmall/>
      <Card url={movies} title={"Movies"} isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
