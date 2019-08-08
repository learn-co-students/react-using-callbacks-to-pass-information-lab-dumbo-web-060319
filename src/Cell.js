import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => 
  {
    let finalColor = this.props.chosenColor();
    this.setState ({
      color: finalColor
    })
    console.log(finalColor)
    console.log(this.state.color)
  }
  
  render() {
    return (
      <div onClick = {this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
