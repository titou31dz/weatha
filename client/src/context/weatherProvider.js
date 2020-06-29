import React, { useReducer } from "react";
import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";

const WeatherProvider = (props) => {
  const initstate = { loading: true, data: {} };

  const [state, dispatch] = useReducer(weatherReducer, initstate);

  const getWeather = async () => {
    try {
      const url = "";
      dispatch({ type: "SENDING_REQUIST" });
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "41ef8b47d2mshf456962b32241cep1c89c2jsnd0414f4ae882",
        },
      });
      const data = await res.json();
      dispatch({ type: "GET_WEATHER", data });
      dispatch({ type: "REQUIST_FINISHED" });
    } catch {
      console.log("error");
    }
  };

  return (
    <WeatherContext.Provider
      value={{ getWeather, data: state.data, loading: state.loading }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
