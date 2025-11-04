import type Deck from "./IDeck";
import type IPlayer from "./IPlayer";

export default interface IRound {
    players: IPlayer[], // Used for turn order
    currentPlayerTurn: IPlayer,
    roundNumber: number, //sequential number to keep track of round
    wildCardRank: number, 

    deck: Deck,
    discardDeck: Deck,
    state: string, //['in progress', 'redemption'], //TODO: Turn into enum
    firstOut?: IPlayer | null, //Used for calculating when redemption ends
}