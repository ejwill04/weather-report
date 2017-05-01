import React, { Component } from 'react'
import AppContainer from '../../containers/AppContainer'
import City from '../City/City'

class CityList extends Component {

  render() {
    let list = this.props.weather ?
    this.props.weather.map((city, i) => {
      return <City data={city} key={i} />
    }) : null

    return (
      <div>
        <div className='resultsContainer'>{list}</div>
      </div>
    )
  }
}

export default AppContainer(CityList)
