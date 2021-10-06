
const gamesList = document.getElementById('gamesList');
const searchBar = document.getElementById('searchBar');
let hpGames = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredGames = hpGames.filter((game) => {
        return (
            game.name.toLowerCase().includes(searchString) ||
            game.id.toLowerCase().includes(searchString)
        );
    });
    displayGames(filteredGames);
});

const loadGames = async () => {
    try {
        const res = await fetch('https://5b96285652764b001413bbd1.mockapi.io/api/data');
        hpGames = await res.json();
        console.log(hpGames);
        displayGames(hpGames);
    } catch (err) {
        console.error(err);
    }
};

const displayGames = (game) => {
    const htmlString = game
        .map((game) => {
            return `
            <li class="game">
                <h2>${game.name}</h2>
                <p>Studio: ${game.id}</p>
                <img src="images/512x512.jpg" alt=" "></img>
            </li>
        `;
        })
        .join('');
    gamesList.innerHTML = htmlString;
};

loadGames();
