import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

  renderSquare(i) {
    return <Square 
    piece = {this.props.squares[i]} 
    style = {this.props.squares[i]? this.props.squares[i].style : null}
    winningSquare = {this.props.winningSquares && this.props.winningSquares.indexOf(i) > -1? true : false}
    // onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        squareRows.push(this.renderSquare((i*8) + j));
      }
      board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}