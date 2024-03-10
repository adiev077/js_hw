const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
        const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
        const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

        getMovies(API_URL_POPULAR, "moviesContainer-search");
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
            moviesEl.innerHTML = ''; // Очищаем контейнер перед добавлением новых фильмов

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

        document.getElementById('searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const searchInput = document.getElementById('search').value.trim();
            if (searchInput !== '') {
                const searchUrl = `${API_URL_SEARCH}${encodeURIComponent(searchInput)}`;
                getMovies(searchUrl, 'moviesContainer-search');
            }
        });

        // Показываем популярные фильмы при загрузке страницы
        getMovies(API_URL_POPULAR, 'moviesContainer-search');
        


// МЕНЮ ПОИСКА -------------------------------------------------------------

document.getElementById('search').addEventListener('click', () => {
    document.getElementById('searchMenu').style.display = 'block';
    document.body.classList.add('menu-open');
});

document.addEventListener('click', function(e) {
    const hamburgerMenu = document.getElementById('searchMenu');
    const searchForm = document.getElementById('searchForm');

    if (!searchForm.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.style.display = 'none';
        document.body.classList.remove('menu-open');
    }
});


// СКРОЛЛ -=====================================================
const slider = document.querySelector('.video-list');
const rightScroll = document.getElementById('rightScroll');
const leftScroll = document.getElementById('leftScroll');
const videoElements = document.querySelectorAll('.video-list video');
let flag = true

const videoArray = Array.from(videoElements);
console.log(videoArray)

let activeVideo = 0

rightScroll.addEventListener('click', () => {
    slider.style.scrollBehavior = 'smooth'
    slider.scrollLeft += 840;
})

leftScroll.addEventListener('click', () => {
    slider.style.scrollBehavior = 'smooth'
    slider.scrollLeft -= 840;
})

const sliderWidth = slider.scrollWidth - slider.clientWidth;

slider.addEventListener('scroll', () => {
    if (slider.scrollLeft === sliderWidth) {
        slider.scrollLeft = 0;
    }
});