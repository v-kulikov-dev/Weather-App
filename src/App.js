import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import MainScreen from "./components/MainScreen";
import OneDayForecast from "./components/OneDayForecast";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path={"/day/:page"} component={OneDayForecast} />
      </Switch>
    </>
  );
};

export default withRouter(App);
