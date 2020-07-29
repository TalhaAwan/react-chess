import Piece from './piece.js';
import { isSameRow, isSameColumn, isSameDiagonal, isPathClean } from '../helpers'

export default class Rook extends Piece {
  constructor(player) {
    super(player, (player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
  }

  isMovePossible(src, dest, squares) {
    return isPathClean(this.getSrcToDestPath(src, dest), squares) && (isSameColumn(src, dest) || isSameRow(src, dest));
  }

  /**
   * get path between src and dest (src and dest exclusive)
   * @param  {num} src  
   * @param  {num} dest 
   * @return {[array]}      
   */
  getSrcToDestPath(src, dest) {
    let path = [], pathStart, pathEnd, incrementBy;
    if (src > dest) {
      pathStart = dest;
      pathEnd = src;
    }
    else {
      pathStart = src;
      pathEnd = dest;
    }
    if (Math.abs(src - dest) % 8 === 0) {
      incrementBy = 8;
      pathStart += 8;
    }
    else {
      incrementBy = 1;
      pathStart += 1;
    }

    for (let i = pathStart; i < pathEnd; i += incrementBy) {
      path.push(i);
    }
    return path;
  }
}
