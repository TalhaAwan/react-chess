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
      player: 1,
      sourceSelection: -1,
      status: 'Next player: 1'
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    console.log(i);


    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    // squares[i] = this.state.xIsNext? 'X' : 'O';
    
    if(this.state.sourceSelection === -1){
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Wrong selection. Choose player " + this.state.player + " pieces."})
      }
      else{
        this.setState({
          status: "Choose valid destination for the selected piece",
          sourceSelection: i
        });
      }

    }

    else if(this.state.sourceSelection > -1){
      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1,
        })
      }
      else{
        const squares = this.state.squares;
        squares[i] = squares[this.state.sourceSelection];
        squares[this.state.sourceSelection] = null;
        let player = this.state.player === 1? 2: 1;
        this.setState({
          status: "",
          sourceSelection: -1,
          squares: squares,
          player: player,
          status: 'Next player: ' + player
        });
      }
    }


  }

  render() {
    const squares = this.state.squares.slice();
    let winner;
    let winningSquares = calculateWinner(squares);
    let status = this.state.status;

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {squares}
            winningSquares = {winningSquares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            
            <div>{status}</div>
          </div>
        </div>

        <div className="icons-attribution">
          <div> <small> Chess Icons And Favicon (extracted) By en:User:Cburnett [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>, <a href="http://opensource.org/licenses/bsd-license.php">BSD</a> or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>], <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">via Wikimedia Commons</a> </small></div>
        </div>
      </div>

     
      );
  }
}


class Piece {
  constructor(player, iconUrl){
    this.player = player;
    this.style = {backgroundImage: "url('"+iconUrl+"')"};
  }
}

class Rook extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
  }

  isMoveLegal(){
    return true
  }
}


class Knight extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
  }

  isMoveLegal(){
    return true
  }
}

class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
  }

  isMoveLegal(){
    return true
  }
}


class Queen extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
  }

  isMoveLegal(){
    return true
  }
}

class King extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }

  isMoveLegal(){
    return true
  }
}


class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1?  "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
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