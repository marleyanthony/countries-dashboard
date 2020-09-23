import React, { Component } from 'react';
// import CardItem from './CardItem';

class Card extends Component {
  state = {
    query: '',
    filteredCountries: []
  }

  componentWillUnmount() {
    this.setState({
      query: '',
      filteredCountries: []
    });
  }

  handleInputChange = (e) => {
    const query = e.target.value;
    const regex = /\W/g;
    const queryRegex = RegExp(e.target.value.replace(regex, "\\$&"), "gi");
    const countryData = this.props.countriesData;
    let filteredCountries = countryData.filter((item) => {
      return queryRegex.test(Object.values(item));
    });
    this.setState({
      query,
      filteredCountries
    });
  }

  render() {
    let countryData = this.props.countriesData;

    if (this.state.query !== '' && this.state.filteredCountries.length > 0) {
      countryData = this.state.filteredCountries;
    }
    // console.log(countryData);

    return (
      <>
        <section className="filter">
          <div className="filter__filter-wrapper">
            <input type="text" className="filter__search-bar" placeholder="Search for a country..." onChange={this.handleInputChange} />
            <select name="region" className="filter__region-filter" onChange={this.handleInputChange}>
              <option value="default" className="filter__region-option">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </section>

        <div className="countries">
          {
            countryData.map((country) => (
              <div className="countries__card">
                <div className="countries__flag-wrapper">
                  <img src={country.flag} alt="flag" className="countries__flag" />
                </div>
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
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default Card
