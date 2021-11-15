import { useState } from "react";
import Links from "./Links";
import { useResultContext } from "../Context/ResultContext";
const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const [value, setValue] = useState(searchTerm);
  const searchFunc = (id) => {
    if (id.code === "Enter") {
      setSearchTerm(value);
    }
  };
  return (
    <div className="md:w-2/5 w-full mx-auto flex flex-col justify-center items-center mt-5 px-3">
      <input
        type="text"
        className="h-12 sm:w-96 w-full pr-8 pl-5 rounded-full z-0 focus:shadow focus:outline-none text-black"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(id) => searchFunc(id)}
      />
      <Links />
    </div>
  );
};

export default Search;
