import React from 'react';

const Car = ({ car: { brand, owner, model, plate } }) => {
  return (
    <div className="">
      <p><strong>{brand}</strong></p>
      <p>{owner}</p>
      <p>{model}</p>
      <p>{plate}</p>
      <hr />
    </div>
  );
};

export default Car;
