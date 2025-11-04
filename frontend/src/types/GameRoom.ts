import type Game from "./Game";
import type Player from "./Player";

export default interface GameRoom {
    players: Player[],
    hostPlayer: Player,
    game: Game,
    isRoomLocked: boolean, //Lock room when game is started
}