import React, { useState } from 'react';
import styles from '../styles/counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <nav className={styles.buttons}>
      <h1 className={styles.txt3}> Counter  </h1>
      <p className={styles.txt2}>
        Count: {count}
      </p>
   
      <button className={styles.btn1} onClick={increment}>Increment</button>
      <button className={styles.btn2} onClick={decrement}>Decrement</button>
    
    </nav>
  );
};

export default Counter;

