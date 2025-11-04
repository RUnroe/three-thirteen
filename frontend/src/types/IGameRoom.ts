import type IGame from "./IGame";
import type IPlayer from "./IPlayer";

export default interface IGameRoom {
    players: IPlayer[],
    hostPlayer: IPlayer,
    game: IGame,
    isRoomLocked: boolean, //Lock room when game is started
}