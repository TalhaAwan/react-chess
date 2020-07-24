export default class Piece {
  constructor(player, iconUrl) {
    this.player = player;
    this.style = { backgroundImage: "url('" + iconUrl + "')" };
  }

  getPlayer() {
    return this.player
  }
}