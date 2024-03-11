import { getMovies, showMovies } from './api.js';
import { setupSearchMenu } from './search.Menu.js';
import { setupSlider } from './slider.js';
import { setupVideo } from './video.js';


const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR, "moviesContainer1");
getMovies(API_URL_POPULAR + "2","moviesContainer2", 6);
getMovies(API_URL_POPULAR + "5","moviesContainer3", 6);
getMovies(API_URL_POPULAR + "8","moviesContainer4", 2);
getMovies(API_URL_POPULAR + "3","moviesContainer5", 9);
getMovies(API_URL_POPULAR + "6","moviesContainer6", 4);

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('search').value.trim();
    if (searchInput !== '') {
        const searchUrl = `${API_URL_SEARCH}${encodeURIComponent(searchInput)}`;
        getMovies(searchUrl, 'moviesContainer-search');
    }
});

getMovies(API_URL_POPULAR, 'moviesContainer-search');

setupSearchMenu();
setupSlider();
setupVideo();
showMovies();
