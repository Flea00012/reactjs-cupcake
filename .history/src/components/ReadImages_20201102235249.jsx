import React from 'react';

import cupcake from '../Images/cupcakes/...';

const getImages = () => {
  cupcake.reduce((img) => img);
};


getImages() {
  fetch('./')
  .then(res => res.json())
  .then((data) => {
     console.log(data)
  });
}

export default function ReadImages() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={getImages}
        alt="birthday cupcake"
        height="500px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}