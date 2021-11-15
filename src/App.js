import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/Routes";
import { ResultContextProvider } from "./Context/ResultContext";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ResultContextProvider>
      <BrowserRouter>
        <div className={`${darkTheme ? "dark" : ""}`}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen overflow-x-hidden">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <AllRoutes />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ResultContextProvider>
  );
};

export default App;
