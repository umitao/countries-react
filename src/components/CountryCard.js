import React from "react";

const CountryCard = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((country) => (
          <div className="card col-3" key={country.numericCode}>
            <img src={country.flag} alt="#" className="card-img-top" />
            <p>{country.name}</p>
            <p>{country.population}</p>
            <p>{country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
