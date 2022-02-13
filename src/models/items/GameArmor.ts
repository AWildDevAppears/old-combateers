import GameItem, { IGameItem, ItemType } from "./GameItem";

export default class GameArmor extends GameItem {
    type = ItemType.ARMOR;
}