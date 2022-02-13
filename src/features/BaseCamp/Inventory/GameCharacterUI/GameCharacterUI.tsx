import { useEffect } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/RootStateStore';
import GameCharacter from '../../../../models/GameCharacter';

export default function GameCharacterUI()
{
    const { health, energy, armorChest } = useAppSelector((state: RootState) => state.character);

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
                    <li>Helmet: Helm of defaults</li>
                    <li>Chest: {armorChest?.name}</li>
                    <li>Legs: Greaves of simpleness</li>
                    <li>Gauntlets: Leather gloves</li>
                    <li>Boots: Comfy shoes</li>
                    <li>Amulet: Cursed charm</li>
                </ul>
            </section>   
        </div>
    );
}