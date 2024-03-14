import language from "../utils/language";
const Search = () => {
    return (
        <div className="bg-black flex gap-14">
            <input
                type="text"
                placeholder={language.hindi.search}
                className="absolute p-4 bg-gray-700 w-1/2 top-1/4 left-1/4 rounded-lg bg-opacity-80 text-white"
            />
            <button className="absolute top-1/4 left-3/4 p-4 bg-red-600 rounded-lg bg-opacity-80 text-white">Search</button>
        </div>

    )
}

export default Search;