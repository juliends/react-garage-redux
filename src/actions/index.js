export function fetchCars(channel) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`)
    .then(response => response.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}
