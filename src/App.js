import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import CityList from './CityList'
import './App.css'
import API_KEY from '../key'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      selectedWeather: {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchWeather = this.fetchWeather.bind(this)
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  handleSubmit() {
    this.fetchWeather()
  }

  fetchWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(payload => {
      this.props.addCity(payload)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather Report</h2>
        </div>
        <div id='search-container'>
          <input
              id='inputField'
              placeholder='Search by City'
              value={this.state.userInput}
              onChange={this.handleChange}
            ></input>
          <button
              id='submitBtn'
              onClick={this.handleSubmit}
            >Search
          </button>
        </div>
        <CityList />
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer(App)
