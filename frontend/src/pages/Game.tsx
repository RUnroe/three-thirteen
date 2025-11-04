import { useEffect, useState } from "react";
import type Player from "../types/Player";
import type Round from "../types/Round";
import generateDeck from "../util/deck/generateDeck";
import shuffleDeck from "../util/deck/shuffleDeck";

const Game = () => {
    const [player1, setPlayer1] = useState<Player>({score: 0, deck: {cards:[], groupings: []}, isTurn: true, gameScores: [], userId: "1", username: "RUnroe", wins: 0, mostRecentWinner: false});
    const [round, setRound] = useState<Round>({players: [player1], currentPlayerTurn: player1, roundNumber: 1, wildCardRank: 3, deck: {cards: shuffleDeck(generateDeck(2))}, discardDeck: {cards:[]}, state: "IN_PROGRESS", firstOut: null});
    
    useEffect(() => {
        let tempDeck = round.deck.cards;
        let playerDeck = tempDeck.splice(0, round.wildCardRank);
        let discardDeck = tempDeck.splice(0, 1);

        setRound({...round, deck: {cards: tempDeck}, discardDeck: {cards: discardDeck}});
        setPlayer1({...player1, deck: {cards: playerDeck}});

        console.log(player1, round)
    }, []);
    return (
        <main id="game">
            {player1.deck?.cards?.map((card, index) => (
                <div key={`player1-deck-card-${index}`}>
                    <span>{card.suit} {card.displayRank}</span>
                </div>
            ))}
        </main>
    );
};

export default Game;