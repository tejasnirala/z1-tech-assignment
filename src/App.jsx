import React, { useState } from "react";
import Weather from "./components/Weather";
import Forecast from "./components/Forcast";

const App = () => {
  const [forecast, setForecast] = useState([]);

  return (
    <div>
      <Weather setForecast={setForecast} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
