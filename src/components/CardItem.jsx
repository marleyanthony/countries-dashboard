import React from 'react'

function CardItem(props) {
  console.log(props.name);

  // const { name, population, region, capital } = props.countriesList;

  return (
    <li className="countries__card">
      {/* <img src={props.flag} alt="" className="countries__card-flag"/> */}
    </li>
  )
}

export default CardItem
