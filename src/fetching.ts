import { BASE_IMG_URL, POPULAR_URL, search_URL, topRated_URL, upcoming_URL } from "./API";
import { creatMovieCard } from "./movie-card";

export const filmContainer: HTMLElement | null = document.getElementById('film-container');
const filmFavContainer: HTMLElement | null = document.getElementById('favorite-movies')


interface Movie {
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
    backdrop_path: string,
    id: string
}

interface Films {
    pages: number
    results: Movie[]
}

export function getFilms(url: string): Promise<void> {
    return fetch(url).then(res => res.json()).then((data: Films) => {
        console.log(data.results)
        const movies = { pages: data.pages, results: returnFilms(data.results) }
        displayPopularFilms(movies);
        displayRandomFilm(movies.results)
        displayFavFilms(movies)
    });
}

function returnFilms(movies: Movie[]) {
    return movies.map((result) => {
        return {
            title: result.title,
            poster_path: result.poster_path,
            overview: result.overview,
            release_date: result.release_date,
            backdrop_path: result.backdrop_path,
            id: result.id
        }
    });
}

export function displayFavFilms(data: Films) {
    let arr: string[] = []

    const arrIdString = window.localStorage.getItem('movieId')

    if (arrIdString != null && arrIdString.trim() != "") {
        arr = JSON.parse(arrIdString)
    }

    const favMovies = data.results.filter((movie) => arr.includes(movie.id))


    console.log("fooo", favMovies);




    favMovies.forEach((film: Movie) => {

        const filmImg = `${BASE_IMG_URL}/${film.poster_path}`

        const FilmEl = document.createElement('div')
        FilmEl.classList.add('col-12', 'p-2')
        FilmEl.innerHTML = creatMovieCard(filmImg, film.overview, film.release_date, film.id)
        if (filmFavContainer != null) {
            filmFavContainer.appendChild(FilmEl)

        }
    });
}

export function displayRandomFilm(data: Movie[]) {
    const randomArrIndex = Math.floor(Math.random() * data.length);
    data[randomArrIndex];
    const title = document.getElementById('random-movie-name');
    if (title) {
        title.innerHTML = data[randomArrIndex].title
    }

    const overview = document.getElementById('random-movie-description');
    if (overview) {
        overview.innerHTML = data[randomArrIndex].overview
    }

    const backgroundImg = document.getElementById('random-movie')
    if (backgroundImg) {
        backgroundImg.style.backgroundImage = ` url(${BASE_IMG_URL + data[randomArrIndex].backdrop_path
            })`;
    }

}

const searchInput = (<HTMLInputElement | null>document.getElementById('search'));

export const displaySearchFilms = (e: Event): void => {
    e.preventDefault();

    if (searchInput != null) {
        const search = searchInput.value;

        if (search) {
            filmContainer?.replaceChildren()
            getFilms(search_URL + '&query=' + search)
        } else {
            filmContainer?.replaceChildren()
            getFilms(POPULAR_URL)
        }

    }

}

export const displayCategoriesFilms = (e: MouseEvent): void => {
    const theTarget = e.target as HTMLElement

    if (theTarget.id === 'popular') {
        filmContainer?.replaceChildren()
        getFilms(POPULAR_URL)
    } else if (theTarget.id === 'upcoming') {
        filmContainer?.replaceChildren()
        getFilms(upcoming_URL)
    } else if (theTarget.id === 'top_rated') {
        filmContainer?.replaceChildren()
        getFilms(topRated_URL)
    }
}

export function displayPopularFilms(data: Films) {
    data.results.forEach((film) => {

        const filmImg = `${BASE_IMG_URL}/${film.poster_path}`

        const FilmEl = document.createElement('div')
        FilmEl.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2')
        FilmEl.innerHTML = creatMovieCard(filmImg, film.overview, film.release_date, film.id)
        if (filmContainer != null) {
            filmContainer.appendChild(FilmEl)

        }
    });
}


export function handleOnClick(event: any) {
    let arr: string[] = []

    console.log(event.target.id);

    const arrIdString = window.localStorage.getItem('movieId')

    if (arrIdString != null && arrIdString.trim() != "") {
        arr = JSON.parse(arrIdString)
    }

    if (!arr.includes(event.target.id)) {
        arr.push(event.target.id)

        if (event.target !== event.currentTarget) {
            const target = event.target;
            target.style.fill = 'red';

        }


    }
    else {
        arr = arr.filter((id) => {
            return id != event.target.id;
        });

        if (event.target !== event.currentTarget) {
            const target = event.target;
            target.style.fill = 'transparent ';

        }
    }

    window.localStorage.setItem('movieId', JSON.stringify(arr))
}

let pageNumber = 1

export const loadMore = (e: MouseEvent): void => {

    // const theTarget = e.target as HTMLElement

    const filmEl = document.createElement('div');

    if (filmContainer != null) {
        filmContainer.appendChild(filmEl)
        getFilms(POPULAR_URL + `&page=${pageNumber += 1}`)
    };
};
