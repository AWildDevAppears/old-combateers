import PlayingCard from "../../components/PlayingCard";

/**
 * When you collect new cards from dungeons, here's where you add them to your deck and replace your old cards.
 */
export default function GameDeckBuildView()
{
    return (
        <div>
            <h1>Deck build view</h1>

            <div className="deck">
                <PlayingCard />
                <PlayingCard />
                <PlayingCard />
                <PlayingCard />
                <PlayingCard />
            </div>
        </div>
    )
}