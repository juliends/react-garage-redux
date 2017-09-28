export default function(state = null, action) {
  switch (action.type) {
    case 'CREATE_CAR':
    debugger
      return [...state, action.payload];
    default:
      return state;
  }
}
