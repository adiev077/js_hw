const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR, "moviesContainer1");
getMovies(API_URL_POPULAR + "2","moviesContainer2", 6);
getMovies(API_URL_POPULAR + "5","moviesContainer3", 6);

async function getMovies(url, containerId) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData, containerId);
}

function showMovies(data, containerId) {
    const moviesEl = document.getElementById(containerId);

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
            </div>
        `;
        movieEl.addEventListener("click", () => openModal(movie.filmId))
        moviesEl.appendChild(movieEl);
    });
}


const form = document.querySelector("form");
const search = document.querySelector(".search");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
    if (search.value) {
        getMovies(apiSearchUrl, "searchResults");

        search.value = "";
    }
});
