import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Filter from './components/Filter';
import Card from './components/Card';

class App extends Component {
  state = {
    countriesData: []
  }

  componentDidMount() {
    this.getCountriesList();
  }

  getCountriesList() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        // console.log(res.data);
        this.setState({ countriesData: res.data })
      })
  }


  render() {
    return (
      <>
        <Header />
        <Filter />
        <Card countriesData={this.state.countriesData} />
      </>
    );
  }
}

export default App;
