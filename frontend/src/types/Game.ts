import type Player from "./Player";
import type Round from "./Round";

export default interface Game {
    currentRound: Round,
    players: Player[],
}