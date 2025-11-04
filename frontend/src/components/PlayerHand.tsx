import { useCallback } from "react";
import type IPlayer from "../types/IPlayer"
import DraggableCard from "./DraggableCard";
import type ICard from "../types/ICard";

interface Props {
    player: IPlayer,
    setPlayer: (player: IPlayer) => void 
}

const PlayerHand = ({player, setPlayer}: Props) => {
    const setCards = (cards: ICard[]) => {
        let playerDeck = player.deck;
        playerDeck.cards = cards;
        setPlayer({...player, deck: playerDeck});
    }

    const movePosition = useCallback((dragIndex: number, hoverIndex: number) => {
        let prevCards = [...player.deck.cards];
        let [draggedCard] = prevCards.splice(dragIndex, 1);
        prevCards.splice(hoverIndex, 0, draggedCard);

        console.log(dragIndex, hoverIndex)
        console.log(player.deck.cards, prevCards)
        setCards(prevCards);

    //   setCards((prevCards: ICard[]) =>
    //     update(prevCards, {
    //       $splice: [
    //         [dragIndex, 1],
    //         [hoverIndex, 0, prevCards[dragIndex] as Item],
    //       ],
    //     }),
    //   )
    }, [player]);


    return (
        <div className="player-deck">
            {player.deck?.cards?.map((card, index) => (
                <DraggableCard key={`player1-deck-card-${index}`} 
                    card={card} 
                    cardIndex={index} 
                    movePosition={movePosition} 
                />
                
            ))}
        </div>
    )
}

export default PlayerHand;