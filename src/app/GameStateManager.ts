import GameCharacter from "../models/GameCharacter";

interface IGameStateManager {
    inventory: string[]
    character: GameCharacter
    party: GameCharacter[]
    deck: string[],
}

const GameStateManager: IGameStateManager = {
    inventory: [
        'item:000001',
        'item:000002',
        'item:000003',
     ],
    character: {
        health: 100,
        energy: 3,
        weapon: null,
        armorChest: null,
        armorHelmet: null,
        armorBoots: null,
        armorGauntlets: null,
        armorLegwear: null,
        trinket: null,
    },
    party: [],
    deck: [
        'card:000001',
        'card:000001',
        'card:000001',
        'card:000002',
        'card:000002',
        'card:000002',
        'card:000003',
        'card:000003'
    ]
};

export default GameStateManager;