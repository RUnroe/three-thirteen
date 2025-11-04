import { useEffect, useState } from "react";
import type IPlayer from "../types/IPlayer";
import type IRound from "../types/IRound";
import generateDeck from "../util/deck/generateDeck";
import shuffleDeck from "../util/deck/shuffleDeck";
import Card from "../components/Card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PlayerHand from "../components/PlayerHand";

const Game = () => {
    const [player1, setPlayer1] = useState<IPlayer>({score: 0, deck: {cards:[], groupings: []}, isTurn: true, gameScores: [], userId: "1", username: "RUnroe", wins: 0, mostRecentWinner: false});
    const [round, setRound] = useState<IRound>({players: [player1], currentPlayerTurn: player1, roundNumber: 1, wildCardRank: 3, deck: {cards: shuffleDeck(generateDeck(2))}, discardDeck: {cards:[]}, state: "IN_PROGRESS", firstOut: null});
    
    //Distribute cards
    useEffect(() => {
        let tempDeck = round.deck.cards;
        let playerDeck = tempDeck.splice(0, round.wildCardRank);
        let discardDeck = tempDeck.splice(0, 1);

        setRound({...round, deck: {cards: tempDeck}, discardDeck: {cards: discardDeck}});
        setPlayer1({...player1, deck: {cards: playerDeck}});

       
    }, []);
     console.log(player1, round)
    return (
        <DndProvider backend={HTML5Backend}>
        <main id="game">
            <PlayerHand player={player1} setPlayer={setPlayer1}/>
        </main>
        </DndProvider>
    );
};

export default Game;