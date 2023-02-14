export function getFilms(url: string) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
    })
}