import React from 'react'
import styles from './styles.css'

const GenerateButton = ({ handleClick }) =>
  <button className={styles.generateButton} onClick={handleClick}>Get Colors</button>

export default GenerateButton
