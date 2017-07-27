import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Square from './square.js';

export default class FallenSoldierBlock extends React.Component {

  renderSquare(square, i, squareShade) {
    console.log(square, i)
    console.log("In Render Square")
    return <Square 
    piece = {square} 
    style = {square.style}
    // shade = {squareShade}
    />
  }


  render() {
;

    return (
      <div>
      <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
        this.renderSquare(ws, index)
        )}</div>
      <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
        this.renderSquare(bs, index)
        )}</div>
      </div>
      );
  }
}

