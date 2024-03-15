import Image from 'next/image';
import Link from "next/link";
import clsx from "clsx";

import { getAllGames } from "./actions/getAllGames"

export default async function GamesPage() {
    const games = await getAllGames();

    return (
        <div className={clsx(
            "flex flex-wrap justify-between",
            "px-5 py-2"
        )}>
            {games.map((game) => (
                <Link
                    href={`/games/${game.provider}/${game.seo_title}`}
                    className="w-1/4 m-2"
                    key={game.identifier}
                >
                    <Image
                        src={game?.identifier}
                        alt={`game-${game?.seo_title}`}
                        width={200} height={200}
                    />
                    {game.title}
                </Link>
            ))}
        </div>
    )
}