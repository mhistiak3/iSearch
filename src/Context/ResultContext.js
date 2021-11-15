import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Programming');

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    const data = await response.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
  };
  

  return (
    <ResultContext.Provider
      value={{ results, isLoading,getResults, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = ()=>{
  return useContext(ResultContext)
}