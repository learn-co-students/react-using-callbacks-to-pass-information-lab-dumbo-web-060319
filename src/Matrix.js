import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
import { throws } from 'assert';

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = 
    {
      color: null
    }
  }

  setColorFromChild = (chosenColor) => 
  {
    this.setState({
      color: chosenColor
    })
  }

  giveColorToCell = () => 
  {
    return this.state.color 
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell chosenColor = {this.giveColorToCell} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor = {this.setColorFromChild}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
