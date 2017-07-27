# React Chess
Two player chess game built with React js.

## How It's Build
The components boilerplate sturcture consisting of Game, Board and Square is same as of Facebook [tic tac toe tutorial](https://facebook.github.io/react/tutorial/tutorial.html).

ES6 classes have been used for chess pieces. `Piece` is a parent class to which `King`, `Queen`, `Bishop`, `Kinight`, `Rook` and `Pawn` extend. Board of squares is filled with these pieces and null.

`Game` component maintains the board of squares filled with pieces, and handles each players' turns plus their moves. 

Each piece implements `isMovePossible(src, dest)` and `getSrcToDestPath(src, dest)` methods which `Game` uses to identify legality of move and renders UI accordingly.

## To Dos
- Implement a method in `Game` that returns true if this move exposes the player's king to check. Use it to disallow the move and inform user.


## Demo

https://talhaawan.github.io/react-chess/

