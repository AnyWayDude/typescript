export const API_KEY: string = 'api_key=e5fbe2e6f11aa9fb6f8cb406a2b1cf94'
export const BASE_URL: string = 'https://api.themoviedb.org/3/'
export const POPULAR_URL: string = BASE_URL + 'movie/popular?' + API_KEY
export const upcoming_URL: string = BASE_URL + '/movie/upcoming?' + API_KEY
export const topRated_URL: string = BASE_URL + '/movie/top_rated?' + API_KEY

export const BASE_IMG_URL: string = 'https://image.tmdb.org/t/p/w500'
export const search_URL: string = BASE_URL + 'search/movie?' + API_KEY