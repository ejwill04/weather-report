import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import moment from 'moment'

import Paper from 'material-ui/Paper';

class CityList extends Component {

  render() {
    console.log(this.props.weather)
    let list = this.props.weather ?
    this.props.weather.map(city => {
      return <Paper className='city-card' key={city.id}>
               <header className='city-header'>
                 <div className='city-name'>{city.name}, {city.sys.country}</div>
                 <div className='city-time'>{moment(city.time).format('MMMM Do YYYY, h:mm a')}</div>
               </header>
               <div>It's currently {Math.round(city.main.temp)}°F</div>
               <div>Humidity: {city.main.humidity}%</div>
               <div>Wind: {Math.round(city.wind.speed)} miles/hour</div>
               <div>{city.clouds.all}% cloudy</div>
               <div>Description: {city.weather[0].description}</div>
             </Paper>
    }) : null

    return(
      <div className='results-container'>
        <div>{list}</div>
      </div>
    )
  }
}

export default AppContainer(CityList)
