import type ICard from "../types/ICard";
import { Draggable } from "./dnd/Draggable";


interface Props {
    card: ICard,
    cardIndex: number,
    movePosition: (dragIndex: number, hoverIndex: number) => void
}
const suitMap: Record<'c' | 'd' | 'h' | 's', string> = {c: '♣', d: '♦', h: '♥', s: '♠'};

const DraggableCard = ({card, cardIndex, movePosition}: Props) => {
    return (
        <Draggable id={card.id} index={cardIndex} movePosition={movePosition}>
            <div className={`card ${card.suit === 'd' || card.suit === 'h' ? 'red' : 'black'}`}>
                <span className="suit">{suitMap[card.suit as 'c' | 'd' | 'h' | 's']}</span> 
                <span className="rank">{card.displayRank}</span>
            </div>
        </Draggable>
    )
}

export default DraggableCard;