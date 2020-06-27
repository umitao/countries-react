import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    fetch(url)
      .then((res) => (res.ok ? res.json() : setIsError(true)))
      .then((data) => {
        setCountries(data);
        setLoaded(true);
      });
  }, []);

  if (!loaded) {
    return <h1>Loading</h1>;
  } else if (isError) {
    return <h1>Error - Cannot load countries</h1>;
  } else
    return (
      <div className="App">
        <Header modeSetter={setIsDark} mode={isDark} />
        <div className="container">
          <div className="row">
            {countries.map((country) => (
              <div className="card col-3" key={country.numericCode}>
                <img src={country.flag} alt="#" className="card-img-top" />
                <p>{country.name}</p>
                <p>{country.population}</p>
                <p>{country.capital}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default App;
