import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Search from "./Search";

const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/search", "/videos", "/images", "/news"]}>
          <Search />
          <Result/>
        </Route>
      </Switch>
    </div>
  );
};

export default AllRoutes;
