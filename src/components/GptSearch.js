import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch =() => {
    return (
        <div>

<div className="absolute -z-10">
        <img
          className="h-[100vh] w-[100vw] object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
             <GptMovieSuggestions />
             <GptSearchBar />

        </div>
    )
}

export default GPTSearch;