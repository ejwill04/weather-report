import React, { Component } from 'react';
import './App.css';
import API_KEY from '../key';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit() {
    this.fetchWeather();
  }


  fetchWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(payload => {
      this.setState({ selectedWeather: payload, userInput: '' })
    })
    .catch(error => console.log(error));
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
      </div>
    );
  }
}

export default App;
