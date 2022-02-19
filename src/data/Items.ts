export enum eItemType {
    WEAPON,
    HELMET,
    CHEST,
    BOOTS,
    GAUNTLETS,
    LEGWEAR,
    CONSUMABLE,
    OTHER
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
    },
    'armo:000001': {
        name: 'Chest armor',
        description: '',
        equip: true,
        type: eItemType.CHEST,
    },
    'armo:000002': {
        name: 'Helmet',
        description: '',
        equip: true,
        type: eItemType.HELMET,
    },
    'armo:000003': {
        name: 'Boots',
        description: '',
        equip: true,
        type: eItemType.BOOTS,
    },
    'armo:000004': {
        name: 'Old gloves',
        description: '',
        equip: true,
        type: eItemType.GAUNTLETS,
    },
    'armo:000005': {
        name: 'Leather bottoms',
        description: '',
        equip: true,
        type: eItemType.LEGWEAR,
    },
    'armo:000006': {
        name: 'Iron greaves',
        description: '',
        equip: true,
        type: eItemType.LEGWEAR,
    },
};

const ItemLookup = {
    getItem(id: string | null): IMultiItem | null
    {
        if (id === null) return null; 
        if (!Reflect.has( data, id )) return null;
        return data[id];
    },
    getItemType(id: string): eItemType
    {
        const item = ItemLookup.getItem(id);
        return item?.type || eItemType.OTHER;
    }
}

export default ItemLookup;