export async function getAllGames(): Promise<Game[]> {
    const response = await fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json");

    const result: Game[] = await response.json();

    return result
}