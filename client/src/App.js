import React, { useContext, useEffect } from "react";
import "./App.css";
import weatherContext from "./context/weatherContext";

const App = () => {
  const { data, loading, getWeather } = useContext(weatherContext);

  useEffect(() => {
    getWeather();
  }, []);
  console.log(data);
  return (
    <div className="App">
      hello
      {/* {loading ? <p>loading...</p> : <p>{data.consolidated_weather[0].id}</p>} */}
    </div>
  );
};

export default App;
