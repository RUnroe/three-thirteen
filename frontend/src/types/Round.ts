import type Deck from "./Deck";
import type Player from "./Player";

export default interface Round {
    players: Player[], // Used for turn order
    currentPlayerTurn: Player,
    roundNumber: number, //sequential number to keep track of round
    wildCardRank: number, 

    deck: Deck,
    discardDeck: Deck,
    state: string, //['in progress', 'redemption'], //TODO: Turn into enum
    firstOut?: Player | null, //Used for calculating when redemption ends
}