import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Board from './board.js';
import calculateWinner from '../helpers/calculate-winner.js'

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      xIsNext: true,
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  render() {
    const squares = this.state.squares.slice();
    let winner;
    let winningSquares = calculateWinner(squares);
    let status;

    if(winningSquares){
      winner = squares[winningSquares[0]];
      status = 'Winner ' + winner; 
    }
    else{
      status = 'Next player ' + (this.state.xIsNext? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares = {squares}
          winningSquares = {winningSquares}
          // onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}



// Chess Icons Attribution: https://www.iconfinder.com/iconsets/chess-7
// Chess Icon License:  https://creativecommons.org/licenses/by/2.5/

class Piece {
  constructor(player, icon){
    this.player = player;
    this.style = {backgroundImage: "url('icons/"+icon+"')"};
  }
}

class Rook extends Piece {
  constructor(player){
    super(player, (player === 1? "white_rook.png" : "black_rook.png"));
  }

  isMoveLegal(){
    return true
  }
}


class Knight extends Piece {
  constructor(player){
    super(player, (player === 1? "white_knight.png" : "black_knight.png"));
  }

  isMoveLegal(){
    return true
  }
}

class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "white_bishop.png" : "black_bishop.png"));
  }

  isMoveLegal(){
    return true
  }
}


class Queen extends Piece {
  constructor(player){
    super(player, (player === 1? "white_queen.png" : "black_queen.png"));
  }

  isMoveLegal(){
    return true
  }
}

class King extends Piece {
  constructor(player){
    super(player, (player === 1? "white_king.png" : "black_king.png"));
  }

  isMoveLegal(){
    return true
  }
}


class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1?  "white_pawn.png" : "black_pawn.png"));
  }

  isMoveLegal(){
    return true
  }
}

function initialiseChessBoard(){


  const squares = Array(64).fill(null);

  for(let i = 8; i < 16; i++){
      squares[i] = new Pawn(2);
      squares[i+40] = new Pawn(1);
  }
  squares[0] = new Rook(2);
  squares[7] = new Rook(2);
  squares[56] = new Rook(1);
  squares[63] = new Rook(1);

  squares[1] = new Knight(2);
  squares[6] = new Knight(2);
  squares[57] = new Knight(1);
  squares[62] = new Knight(1);

  squares[2] = new Bishop(2);
  squares[5] = new Bishop(2);
  squares[58] = new Bishop(1);
  squares[61] = new Bishop(1);

  squares[3] = new Queen(2);
  squares[4] = new King(2);

  squares[59] = new Queen(1);
  squares[60] = new King(1);

  return squares;
}