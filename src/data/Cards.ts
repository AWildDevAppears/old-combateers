interface ICard {
    name: string
    description: string
    attack: number
    defence: number
}

const data: {[key: string]: ICard} = {
    'card:000001': {
        name: 'Strike',
        description: '',
        attack: 4,
        defence: 0,
    },
    'card:000002': {
        name: 'Block',
        description: '',
        attack: 0,
        defence: 4,
    },
    'card:000003': {
        name: 'Counter',
        description: '',
        attack: 2,
        defence: 2,
    },
};

const CardLookup = {
    getItem( id: string | null ): ICard | null
    {
        if (id === null) return null; 
        if (!Reflect.has( data, id )) return null;
        return data[id];
    }
}

export default CardLookup;