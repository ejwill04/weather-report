import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a city', () => {
    const data = 'Denver'
    const expectedAction = {
      type: 'ADD_CITY',
      data
    }
    expect(actions.addCity(data)).toEqual(expectedAction)
  })
})
