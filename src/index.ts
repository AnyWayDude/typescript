import { POPULAR_URL } from "./API";
import { getFilms,displayPopularFilms } from "./fetching";

export async function render(): Promise<void> {
    // TODO render your app here

    const moviesDB = await getFilms(POPULAR_URL)
     displayPopularFilms(moviesDB) 
}

