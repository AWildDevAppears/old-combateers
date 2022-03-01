import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/RootStateStore";
import { startQuest } from "../../features/Quest/questLoopSlice";

export default function GameDungeonView() 
{
    const {playerState, currentEnemies, } = useAppSelector((state: RootState) => state.quest);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(startQuest());
    }, []);

    return (
        <div>
            <h1>Dungeon View</h1>

            <h3>Player</h3>
            <p>Health: {playerState.health}/{playerState.maxHealth}</p>
            <p>Energy: {playerState.energy}/{playerState.maxEnergy}</p>
        </div>
    );
}