export default function PlayingCard()
{
    const power = 3;
    const health = 2;
    const name = 'Playing card';

    return (
        <div className="card">
            <header className="card__header">
                <p className="card__power">{power}</p>
                <p className="card__health">{health}</p>
            </header>

            <footer className="card__footer">
                {name}
            </footer>
        </div>
    );
}