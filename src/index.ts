import { POPULAR_URL } from "./API";
import { getFilms, displayPopularFilms, displaySearchFilms, displayCategoriesFilms, handleOnClick, loadMore } from "./fetching";

export async function render(): Promise<void> {
    // TODO render your app here

    // const moviesDB = await getFilms(POPULAR_URL)
    // displayPopularFilms(moviesDB)
    getFilms(POPULAR_URL)

    const categoriesBtns = document.getElementById('button-wrapper')
    categoriesBtns?.addEventListener('click', displayCategoriesFilms)

    const searchFilms = document.getElementById('submit')
    searchFilms?.addEventListener('click', displaySearchFilms);

    const favButton = document.getElementById('fav')
    favButton?.addEventListener('click', handleOnClick);

    const loadMoreBtn = document.getElementById('load-more');
    loadMoreBtn?.addEventListener('click', loadMore);








}

