import React from 'react';

import cupcake from '../Images/cupcakes/...';

const getImages = () => {
  cupcake.map((img) => img);
};

export default function ReadImages() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={getImages}
        alt="birthday cupcake"
        border-radius="50%"
        height="300px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}
