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
              <h4 className="countries__name">{country.name}</h4>
              <h5 className="countries__pop">{country.population}</h5>
              <h5 className="countries__region">{country.region}</h5>
              <h5 className="countries__capital">{country.capital}</h5>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Card
