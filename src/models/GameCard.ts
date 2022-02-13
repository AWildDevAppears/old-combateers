interface IGameCard {
    // Basic card stats
    damage: number
    defence: number
    // Advanced Card stats
}


export default class GameCard implements IGameCard {
    defence: number = 0;
    damage: number = 0;
}