import { POPULAR_URL } from "./API";
import { getFilms, displayPopularFilms, displaySearchFilms, displayCategoriesFilms, handleOnClick, loadMore, displayFavFilms } from "./fetching";

export async function render(): Promise<void> {
    // TODO render your app here

    // const moviesDB = await getFilms(POPULAR_URL)
    // displayPopularFilms(moviesDB)
    await getFilms(POPULAR_URL)

    const categoriesBtns = document.getElementById('button-wrapper')
    categoriesBtns?.addEventListener('click', displayCategoriesFilms)

    const searchFilms = document.getElementById('submit')
    searchFilms?.addEventListener('click', displaySearchFilms);



    const loadMoreBtn = document.getElementById('load-more');
    loadMoreBtn?.addEventListener('click', loadMore);

    const favButtons = document.querySelectorAll('#fav')

    console.log(favButtons);

    favButtons.forEach((btn) => btn.addEventListener('click', handleOnClick))








}

