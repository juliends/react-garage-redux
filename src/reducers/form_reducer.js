export default function(state = null, action) {
  switch (action.type) {
    case 'CREATE_CAR':
      return action.payload;
    default:
      return state;
  }
}
