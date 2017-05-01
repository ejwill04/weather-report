import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import moment from 'moment'

class CityList extends Component {

  render() {
    console.log(this.props.weather)
    let list = this.props.weather ?
    this.props.weather.map(city => {
      return <div className='city-card' key={city.id}>
               <h2>{city.name}, {city.sys.country}</h2>
               <div>{moment(city.time).format('MMMM Do YYYY, h:mm a')}</div>
               <div>It's currently {Math.round(city.main.temp)}°F</div>
               <div>Humidity: {city.main.humidity}%</div>
               <div>Wind: {Math.round(city.wind.speed)} miles/hour</div>
               <div>{city.clouds.all}% cloudy</div>
               <div>Description: {city.weather[0].description}</div>
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
