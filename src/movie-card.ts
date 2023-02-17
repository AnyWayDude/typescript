export const creatMovieCard = (poster_img: string, overview: string, release_date: string, id: string): string => {



    return `
    <div class="card shadow-sm">
    <img
                                    src='${poster_img}'
                                />
                                <div id='fav'  class="bi bi-heart-fill position-absolute p-2">
                                <svg
                                    id=${id}
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="red"
                                    fill="transparent"
                                    width="50"
                                    height="50"
                                    class="bi bi-heart-fill position-absolute p-2"
                                    viewBox="0 -2 18 22"
                                >
                                    <path
                                    id=${id}
                                        fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                             </div>
                                <div class="card-body">
                                    <p class="card-text truncate">
                                        ${overview}
                                    </p>
                                    <div
                                        class="
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                        "
                                    >
                                        <small class="text-muted">${release_date}</small>
                                    </div>
                                </div>
                                </div>
    `
}