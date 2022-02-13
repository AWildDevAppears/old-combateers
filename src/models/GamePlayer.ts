import GameCard from "./GameCard";
import GameCharacter from "./GameCharacter";
import GameItem from "./items/GameItem";

export default class GamePlayer {
    currentDeck: Array<GameCard> = [];

    selectedCharacter: GameCharacter | null = null;

    party: Array<GameCharacter> = [];

    inventory: Array<GameItem> = [];
}