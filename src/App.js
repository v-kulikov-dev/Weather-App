import { useState } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import HourlyDashboard from './components/HourlyDashboard';
import MainScreen from './components/MainScreen';

const App = () => {
  const [weather, setWeather] = useState({});

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <MainScreen weather={weather} setWeather={setWeather} />
        </Route>
        <Route path="/daily">
          <HourlyDashboard weather={weather.hourly} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
