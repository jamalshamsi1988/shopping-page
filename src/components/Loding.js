import React from 'react'

//gif
import spinner from '../assets/gif/spinner.gif';
//Css
import styles from '../components/Loding.module.css';
const Loader = () => {
  return (
    <div className={styles.container}>
      <img  src={spinner} alt="loading"/>
      <h1>Loading ...</h1>
    </div>
  )
}

export default Loader
