export function setupSearchMenu() {
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
}
