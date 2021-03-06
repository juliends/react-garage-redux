export function fetchCars(channel) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`)
    .then(response => response.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}
// https://wagon-garage-api.herokuapp.com/cars/:id
export function createCar(body, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(() => callback());
  return {
    type: 'CREATE_CAR',
    payload: request
  };
}

export function deleteCar(id, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`,
    {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => callback());
  return {
    type: 'DELETE_CAR',
    payload: request
  };
}

