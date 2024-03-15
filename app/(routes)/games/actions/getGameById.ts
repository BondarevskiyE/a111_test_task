import { getAllGames } from ".";

interface Params {
    providerOrCategory: string;
    title: string;
}

export async function getGameById({ providerOrCategory, title }: Params): Promise<Game | null> {
    const games = await getAllGames();

    const result = games.find((game) => {
        return (game.provider === providerOrCategory || game.categories.includes(providerOrCategory)) && game.seo_title === title
    })

    return result || null;
}