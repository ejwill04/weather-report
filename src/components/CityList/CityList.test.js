import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureMockStore from 'redux-mock-store'

import CityList from './CityList'

const fakeStore = configureMockStore()({})

const setup = () => {
  const props = { weather: [{ name: 'Denver' }] }

  const wrapper = mount(
    <Provider store={fakeStore}>
      <CityList weather={props} />
    </Provider>
  )

  const Component = wrapper.find(CityList)

  return {
    props,
    Component
  }
}

describe('CityList', () => {
  it('should render something', () => {
      const { Component } = setup()
      expect(Component.length).toEqual(1)
  })
})
