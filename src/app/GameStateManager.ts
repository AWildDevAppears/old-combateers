import GameCharacter from "../models/GameCharacter";

interface IPlayState {
    cardPile: string[],
    currentHand: string[],
    discardPile: string[],
}

interface IGameStateManager {
    inventory: string[]
    character: GameCharacter
    party: GameCharacter[]
    deck: string[],
    playState: IPlayState,
}

const GameStateManager: IGameStateManager = {
    inventory: [
        'item:000001',
        'item:000002',
        'item:000003',
        'armo:000001',
        'armo:000002',
        'armo:000003',
        'armo:000004',
        'armo:000005',
        'armo:000006',
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
    ],

    /**
     * During play, 5 cards will move from the card pile to the currentHand every turn.
     * The player can use any cards in the currentHand.
     * Once the turn ends, all cards, played or otherwise are moved to the discardPile.
     * Once there are no more cards in the cardPile, the discardPile is shuffled and moved to the cardPile.
     * This repeats until either all the enemies or the player is defeated.
     */
    playState: {
        cardPile: [],
        currentHand: [
            'card:000001',
            'card:000001',
            'card:000001',
            'card:000002',
            'card:000003'
        ],
        discardPile: [],
    }

};

export default GameStateManager;