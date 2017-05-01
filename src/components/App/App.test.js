import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureMockStore from 'redux-mock-store'

import App from './App'

const fakeStore = configureMockStore()({})

const setup = () => {
  const props = { weather: [{ name: 'Denver' }] }

  const wrapper = mount(
    <Provider store={fakeStore}>
      <App weather={props} />
    </Provider>
  )

  const Component = wrapper.find(App)

  return {
    props,
    Component
  }
}

describe('App', () => {
  it('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })
})
