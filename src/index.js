import React from 'react'
import GenerateButton from './generate-button'
import ColorBox from './color-box'
import styles from './styles.css'

class GradientGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      background: '#263238',
      firstColor: '',
      secondColor: ''
    }
  }

  // Randomly selects to generate color hex code
  generateColor() {
    const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#'
    for (let i = 0; i < 6; i++) {
      const rnd = Math.round(Math.random() * (input.length - 1))
      const x = input[rnd]
      color += x
    }
    return color
  }

  // Gets generated colors and applys them to color boxes and background
  setColors = () => {
    const firstColor = this.generateColor()
    const secondColor = this.generateColor()
    this.setState({
      firstColor: firstColor,
      secondColor: secondColor,
      background: `rgba(0, 0, 0, 0) linear-gradient(to left bottom, ${firstColor},
                  ${secondColor}) repeat scroll 0% 0%`
    })
  }

  render() {
    return (
      <div className={styles.container} style={{'background': this.state.background}}>
        <div className={styles.title}> Gradient Generator </div>
        <div className={styles.boxWrGradientGeneratorer}>
          <ColorBox color={this.state.firstColor} />
          <ColorBox color={this.state.secondColor} />
        </div>
        <GenerateButton handleClick={this.setColors} />
      </div>
    )
  }
}

export default GradientGenerator
