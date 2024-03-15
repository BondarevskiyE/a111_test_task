import Image from 'next/image';
import Link from "next/link";

import { getAllGames } from "./actions/getAllGames"
import clsx from "clsx";

export default async function GamesPage() {
    const games = await getAllGames();

    return (
        <div className={clsx(
            "flex flex-wrap justify-between",
            "px-5 py-2"
        )}>
            {games.map((game) => (
                <Link href={`/games/${game.provider}/${game.seo_title}`} key={game.identifier} className="w-1/4">
                    <Image src={game?.seo_title} alt={`game-${game?.seo_title}`} width={200} height={200} />
                    {game.title}
                </Link>
            ))}
        </div>
    )
}