import cities from './weatherReducer'

describe('cities', () => {
  it('should return the initial state', () => {
    expect(cities(undefined, {})).toEqual([])
  })

  it('should handle ADD_CITY', () => {
    expect(
      cities([], {
        type: 'ADD_CITY',
        data: { city: 'Denver' }
      })
    ).toEqual([{
      city: 'Denver',
      time: expect.any(Number)
    }])
  })
})
