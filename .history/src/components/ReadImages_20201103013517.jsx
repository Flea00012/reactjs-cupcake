import React from 'react';

// import cupcake from '../Images/cupcakes/...';

// const getImages = () => {
//   cupcake.reduce((img) => img);
// };

function findImages() {
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
  fetch('../Images/cupcakes/').then((res) => res.map((img) => img));
}

export default function ReadImages() {
  return (
    <div>
      <h3> Image Name </h3>
      <img
        src={findImages}
        alt="birthday cupcake"
        height="500px"
        width="300px"
      />
      <p>Price of the cupcake</p>
    </div>
  );
}
