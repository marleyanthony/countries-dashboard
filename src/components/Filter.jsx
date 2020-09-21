import React from 'react'

function Filter(props) {
  // console.log(props);
  return (
    <section className="filter">
      <div className="filter__filter-wrapper">
        <input type="text" className="filter__search-bar" placeholder="Search for a country..." />
        <select name="region" className="filter__region-filter">
          <option value="default" className="filter__region-option">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default Filter
