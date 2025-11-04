import type ICard from "../types/ICard";

interface Props {
    card: ICard,
    
}
const suitMap: Record<'c' | 'd' | 'h' | 's', string> = {c: '♣', d: '♦', h: '♥', s: '♠'};

const Card = ({card}: Props) => {
    return (
        <div className={`card ${card.suit === 'd' || card.suit === 'h' ? 'red' : 'black'}`}>
            <span className="suit">{suitMap[card.suit as 'c' | 'd' | 'h' | 's']}</span> 
            <span className="rank">{card.displayRank}</span>
        </div>
    )
}

export default Card;