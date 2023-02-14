import { BASE_IMG_URL, BASE_URL } from "./API";
import { creatMovieCard } from "./movie-card";

export const filmContainer:HTMLElement | null = document.getElementById('film-container') ;


interface Movie {
    title: string,
    poster_path: string,
    overview: string,
    release_date: string,
}

interface Films {
    pages:number
    results:Movie[]
}

export function getFilms(url: string):Promise<Films>  {
   return fetch(url).then(res => res.json()).then((data:Films) => {  
    console.log(data.results)     
       return {pages:data.pages, results:returnFilms(data.results) }
       
    })
    
}

function returnFilms(movies:Movie[]) {
    return movies.map((result)=> {
        return {
            title:result.title, 
            poster_path:result.poster_path,
            overview:result.overview,
            release_date:result.release_date
        }
       })

}



export function displayPopularFilms(data: Films) {
    data.results.forEach((film:Movie)=> {

        const filmImg = `${BASE_IMG_URL}/${film.poster_path}`

        const FilmEl = document.createElement('div')
        FilmEl.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2')
        FilmEl.innerHTML = creatMovieCard(filmImg, film.overview, film.release_date)
        if(filmContainer != null){
            filmContainer.appendChild(FilmEl)
        }
    });
}