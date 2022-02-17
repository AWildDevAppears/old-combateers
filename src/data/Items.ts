enum eItemType {
    WEAPON,
    HELMET,
    CHEST,
    BOOTS,
    GAUNTLETS,
    LEGWEAR,
    CONSUMABLE,
}

interface IMultiItem {
    name: string
    description: string
    equip?: boolean
    type?: eItemType 
}

const data: {[key: string]: IMultiItem} = {
    'item:000001': {
        name: 'Item 1',
        description: '',
    },
    'item:000002': {
        name: 'Item 2',
        description: '',
    },
    'item:000003': {
        name: 'Item 3',
        description: '',
    },
    'weap:000001': {
        name: 'Weapon 1',
        description: '',
        equip: true,
        type: eItemType.WEAPON,
    }
};

const ItemLookup = {
    getItem( id: string | null ): IMultiItem | null
    {
        if (id === null) return null; 
        if (!Reflect.has( data, id )) return null;
        return data[id];
    }
}

export default ItemLookup;