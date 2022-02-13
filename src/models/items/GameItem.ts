export interface IGameItem {
    name: string
    description: string
}

export enum ItemType {
    WEAPON,
    ARMOR,
    POTION,
    OTHER,
}

export default class GameItem implements IGameItem {
    type = ItemType.OTHER;
    name: string = '';
    description: string = '';

    constructor( model: IGameItem )
    {
        this.name = model.name;
        this.description = model.description;
    }
}