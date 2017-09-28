export function fetchCars(channel) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`)
    .then(response => response.json());
  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function createPost(body, callback) {
  debugger
  const request = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`, {
  }).then(response => response.json())
    .then(() => callback());
    return {
    type: POST_CREATED,
    payload: request
  };
}
// export function createCar() {
//   const promise = fetch(`https://wagon-garage-api.herokuapp.com/wagon/cars`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         brand: "Fusée",
//         model: "666",
//         owner: "juliends",
//         plate: "I<3U"
//       })
//     })
//     .then(response => response.json());
//   return {
//     type: 'CREATE_CAR',
//     payload: promise
//   };
// }
