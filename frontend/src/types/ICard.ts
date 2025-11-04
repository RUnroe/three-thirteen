export default interface ICard {
    rank: number, //TODO enum
    displayRank: string, //TODO enum
    suit: string, //TODO enum
    points: number,
    image?: string,
    id: string,
}