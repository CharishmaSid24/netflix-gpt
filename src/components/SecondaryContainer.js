import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies )

    return (movies.nowPlayingMovies && <div className=" bg-black">
        <div className="-mt-52 relative z-20 pl-12">
        <MovieList  title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Trending"} movies={movies?.TrendingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
        </div>
    </div>)
}

export default SecondaryContainer;