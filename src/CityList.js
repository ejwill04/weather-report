import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import moment from 'moment'

class CityList extends Component {

  render() {
    console.log(this.props.weather)
    let list = this.props.weather ?
    this.props.weather.map(city => {
      return <div>
              <h2>{city.name}</h2>
              <div>{moment(city.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
             </div>
    }) : null

    return(
      <div className='results-container'>
        <div>{list}</div>
      </div>
    )
  }
}

export default AppContainer(CityList)
