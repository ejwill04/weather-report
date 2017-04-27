import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit() {
    console.log('submit')
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
