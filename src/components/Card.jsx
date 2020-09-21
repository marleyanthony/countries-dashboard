import React, { Component } from 'react';
// import CardItem from './CardItem';

class Card extends Component {

  render() {
    let countryData = this.props.countriesData;

    console.log(countryData);

    return (
      <ul className="countries">
        {
          countryData.map((country) => (
            <li className="countries__card">
              <img src={country.flag} alt="flag" className="countries__flag" />
              <div className="countries__content-wrapper">
                <h4 className="countries__name">{country.name}</h4>
                <h5 className="countries__pop">
                  <span className="countries__label">Population: </span>
                  {country.population}
                </h5>
                <h5 className="countries__region">
                  <span className="countries__label">Region: </span>
                  {country.region}
                </h5>
                <h5 className="countries__capital">
                  <span className="countries__label">Capital: </span>
                  {country.capital}
                </h5>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Card
