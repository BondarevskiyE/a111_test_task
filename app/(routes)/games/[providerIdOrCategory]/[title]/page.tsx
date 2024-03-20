import Image from 'next/image';
// import { notFound } from 'next/navigation'
import clsx from 'clsx';

import { getAllGames, getGameById } from "../../actions";
import Link from 'next/link';

interface Params {
    providerIdOrCategory: string;
    title: string;
}

interface Props {
    params: Params
}

export const dynamicParams = false

export async function generateStaticParams() {
    const games = await getAllGames();

    return games.map((game) => ({
        providerIdOrCategory: game.provider,
        title: game.seo_title,
    }))
}

export default async function GamePage({ params }: Props) {
    const game = await getGameById({ providerOrCategory: params.providerIdOrCategory, title: params.title });

    return (
        <div className='flex px-5'>
            <Link
                href="/games"
                className={clsx(
                    "flex items-center justify-center",
                    "w-20 h-10",
                    "mr-10",
                    "custom-gradient-border"
                )}
            >
                Back
            </Link>

            <div className='flex flex-col'>
                {game?.identifier && <Image src={game?.identifier} alt={`game-${game?.seo_title}`} width={200} height={200} />}

                <p>{`Title - ${game?.title}`}</p>
                <p>{`Provider - ${game?.provider}`}</p>
                <p>{`Categories - ${game?.categories.toString()}`}</p>
            </div>
        </div>
    )
}