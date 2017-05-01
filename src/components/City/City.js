import React, { Component } from 'react'
import moment from 'moment'

import Paper from 'material-ui/Paper'

class City extends Component {

  render() {
    let { data } = this.props
    return (
      <Paper className='city-card' key>
        <header className='city-header'>
          <div className='city-name'>{data.name}, {data.sys.country}</div>
          <div className='city-time'>{moment(data.time).format('MMMM Do YYYY, h:mm a')}</div>
        </header>
        <div>Temperature: {Math.round(data.main.temp)}°F</div>
        <div>Humidity: {data.main.humidity}%</div>
        <div>Wind: {Math.round(data.wind.speed)} miles/hour</div>
        <div>{data.clouds.all}% cloudy</div>
        <div>Description: {data.weather[0].description}</div>
      </Paper>
    )
  }
}

export default City;