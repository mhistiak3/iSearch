import { useState } from "react";
import { useHistory } from "react-router";
import { useResultContext } from "../Context/ResultContext";

const Home = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const { setSearchTerm } = useResultContext();
  const setSearchValue = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(value);
      history.push("/search");
    }
  };
  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 w-full flex justify-center px-10"
      style={{ height: "500px" }}
    >
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="text-3xl bg-purple-600 font-bold text-white py-6 px-12 rounded">
          iSearch 🔎
        </h1>
        <div
          style={{ height: "70px" }}
          className="shadow-md mt-10 items-center rounded-full bg-white overflow-hidden px-5 grid grid-cols-12 md:w-2/4 sm:w-full"
        >
          <span className="text-2xl pr-3 pb-1 lg:col-span-1 md:col-span-2 col-span-3">
            🔎
          </span>
          <input
            type="text"
            className="text-2xl text-black focus:outline-none w-auto lg:col-span-11 md:col-span-10 col-span-9"
            placeholder="Search anything...."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => setSearchValue(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
