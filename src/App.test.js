import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.getElementById('root');
  // const div = document.createElement('root');
  render(<Provider store={store} ><App /> </Provider>, div);
});
