export async function getMovies(url, containerId) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData, containerId);
}

const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
export function showMovies(data, containerId) {
    const moviesEl = document.getElementById(containerId);
    moviesEl.innerHTML = '';

    data.films.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <div class="movie__cover-inner">
                <img
                    src="${movie.posterUrlPreview}"
                    class="movie__cover"
                    alt="${movie.nameRu}"
                />
                <div class="movie__cover--darkened"></div>
            </div>
        `;
        movieEl.addEventListener("click", () => openModal(movie.filmId));
        moviesEl.appendChild(movieEl);
    });
}
