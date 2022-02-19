import { useEffect } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/RootStateStore';
import ItemLookup from '../../../../data/Items';

export default function GameCharacterUI()
{
    const { health, energy, armorHelmet, armorChest, armorLegwear, armorBoots, armorGauntlets, } = useAppSelector((state: RootState) => state.inventory);
    let helmet = ItemLookup.getItem(armorHelmet);
    let chestArmor = ItemLookup.getItem(armorChest);
    let legwear = ItemLookup.getItem(armorLegwear);
    let boots = ItemLookup.getItem(armorBoots);
    let gauntlets = ItemLookup.getItem(armorGauntlets);


    return (
        <div>
            <h2>Implement a UI here</h2>
            <section>
                <h3>Name: Jeffery Jefferson</h3>

                <ul>
                    <li>Health: {health}</li>
                    <li>Energy: {energy}</li>
                </ul>
            </section>

            <section>
                <h4>Gear</h4>

                <ul>
                    <li>Helmet: {helmet?.name}</li>
                    <li>Chest: {chestArmor?.name}</li>
                    <li>Legs: {legwear?.name}</li>
                    <li>Gauntlets: {gauntlets?.name}</li>
                    <li>Boots: {boots?.name}</li>
                    <li>Amulet: Cursed charm</li>
                </ul>
            </section>   
        </div>
    );
}