const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        Object.assign(action.data, { time: Date.now() })
      ]
    default:
      return state;
  }
};

export default cities;
