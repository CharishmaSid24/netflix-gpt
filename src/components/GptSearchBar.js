import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    return (
        <div className="pt-[10%] flex justify-center">
            <form className= "bg-black w-1/2 grid grid-cols-12">
                <input type="text" className="p-4 m-4 col-span-9 " placeholder={lang.hindi.gptSearchPlaceholder} />
                <button className=" py-2  px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">{lang.hindi.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;