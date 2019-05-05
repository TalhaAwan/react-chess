# React Chess
Two player chess game built with React js.

## How To Install And Run Locally

- Pull the project and `cd` into it
- Install packages with `npm install`
- Finally `npm run start`, which will start hot reloading, and fire up browser with http://localhost:3000/

## How It's Built
The components boilerplate structure consisting of Game, Board and Square is same as of Facebook [tic tac toe tutorial](https://facebook.github.io/react/tutorial/tutorial.html).

ES6 classes have been used for chess pieces. `Piece` is a parent class to which `King`, `Queen`, `Bishop`, `Knight`, `Rook` and `Pawn` extend. Board of squares is filled with these pieces and `null`.

`Game` component maintains the board of squares filled with pieces, and handles turn and move of both players. 

Each piece implements `isMovePossible(src, dest)` and `getSrcToDestPath(src, dest)` methods which `Game` uses to identify legality of move and to render UI accordingly.

## To Dos
- Implement a method in `Game` that returns true if this move exposes the player's king to check. Use it to disallow the move and inform user.
- Write unit tests 

## Demo

http://www.talhaawan.net/react-chess/

## Blog Post

https://www.techighness.com/post/develop-two-player-chess-game-with-react-js/


