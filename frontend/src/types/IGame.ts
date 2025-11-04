import type IPlayer from "./IPlayer";
import type IRound from "./IRound";

export default interface IGame {
    currentRound: IRound,
    players: IPlayer[],
}