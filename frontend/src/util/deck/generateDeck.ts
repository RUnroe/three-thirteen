import type Card from "../../types/ICard";


export default (numOfDecks: number) => {
    let suits = ['c', 'd', 'h', 's'];
    let ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

    let cards:Card[] = [];

    suits.forEach((suit) => {
        ranks.forEach((rank, rankIndex) => {
            for(let i = 0; i < numOfDecks; i++) {
                cards.push({
                    rank: rankIndex + 1,
                    displayRank: `${rank}`,
                    suit,
                    points: rankIndex + 1,
                    id: `${suit}-${rankIndex}-${i}`
                });
            }
        });
    });

    return cards;
}