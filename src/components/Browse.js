
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";



const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();


  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GPTSearch />) :
       ( <>
        <MainContainer  />
          <SecondaryContainer />
        </> )
      }
      
      
    </div>
  );
};

export default Browse;
