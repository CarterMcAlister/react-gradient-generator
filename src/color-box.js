import React from 'react'
import styles from './styles.css'

const ColorBox = ({ color }) =>
  <div className={styles.colorBox} style={{'backgroundColor': color}}>{ color }</div>

export default ColorBox
