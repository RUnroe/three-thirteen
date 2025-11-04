import type Deck from "./Deck";

export default interface Player {
    //Round specific
    score: number,
    deck: Deck,
    isTurn: boolean, //I don't love this name

    //Game specific
    gameScores: number[], // Track each rounds score to display in table at the end
    userId: string,
    username: string,
    wins: number,
    mostRecentWinner: boolean, //Used to place a crown over players head
}