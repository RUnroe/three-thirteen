import type ICard from "./ICard";

export default interface IDeck {
    cards: ICard[],
    groupings?: [], // This is used to track which card are going to score (player decks only)
    // e.g. [[1h, 2h, 3h], [7h, 7s, 7d]]
}