import React from 'react';

import styles from '../styles/mystyle.module.css';

function CakeCupCake() {
  return (
    <div>
      <h1 className={styles.bigBlue}>CupCakes</h1>
      <img src={require('../../Images/cupcakes/ccBirthday.jpeg')} alt='Hourse image/>
    </div>
  );
}

export default CakeCupCake;
