import React from 'react';
import Counter from '../components/Counter';
import '../styles/global.css';  // Import the global CSS
import styles from '../styles/counter.module.css';  // Import the counter module CSS

const Home = () => {
  return (
    
    <nav className={styles.nav3}>
    <nav className={styles.nav1}>  {/* Use the imported style */}
      <nav className={styles.nav2}>
        <h1 className={styles.txt1}
        >
        </h1>
      </nav>
     
    </nav>
    <Counter />
    </nav>
    
  );

  
};

export default Home;
