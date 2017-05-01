import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
const fakeStore = configureMockStore()({})

import City from './City'

const setup = () => {

  const wrapper = mount(
    <Provider store={fakeStore}>
      <City data={{
        name: 'Denver',
        sys: {
          country: 'US'
        },
        main: {
          temp: 10,
          humidity: 40
        },
        wind: {
          speed: 2
        },
        clouds: {
          all: 1
        },
        weather: [{
          description: 'sunny all day'
        }]
      }} />
    </Provider>
  )

  const Component = wrapper.find(City)

  return {
    Component
  }
}

describe('City', () => {
  it.skip('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })
})
