import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import CityList from './CityList'
import './App.css'
import API_KEY from '../key'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      errorMessage: '',
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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(payload => {
      if (payload.message === 'city not found') {
        this.setState({ errorMessage: payload.message })
      } else {
        this.props.addCity(payload)
        this.setState({ errorMessage: '', userInput: '' })
      }
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Weather Report</h2>
          </div>
          <div id='search-container'>
            <TextField
                id='inputField'
                placeholder='Search by City'
                value={this.state.userInput}
                onChange={this.handleChange}
              />
            <RaisedButton
                id='submitBtn'
                label='Search'
                onClick={this.handleSubmit}
                disabled={this.state.userInput.length === 0}
              />
            <div>{this.state.errorMessage}</div>
          </div>
          <CityList />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer(App)
