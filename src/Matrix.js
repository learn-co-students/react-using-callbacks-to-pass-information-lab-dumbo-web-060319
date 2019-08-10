import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state={
      color:null
    }
  }

colorSelectorClicked=(selectedColor)=>{
  this.setState({
    color:selectedColor
  })
}

  genRow = (vals) => (
    vals.map((val, idx) => <Cell newColor={this.state.color} onClick={this.handleClick} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector colorSelectorClicked={this.colorSelectorClicked}/>
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
