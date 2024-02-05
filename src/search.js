const search = () => {
  const mainPlaylists = document.getElementById('main-playlists');
  const mainPlaylistsSize = 15;

  const mainPlaylistsTitle = [
    'Boas festas',
    'Feitos para você',
    'Lançamentos',
    'Creators',
    'Para treinar',
    'Podcasts',
    'Sertanejo',
    'Samba e pagode',
    'Funk',
    'MPB',
    'Rock',
    'Hip Hop',
    'Indie',
    'Relax',
    'Música Latina',
  ];

  function PopularPlaylists() {
    mainPlaylists.innerHTML = '';
    for (let i = 1; i <= mainPlaylistsSize; i++) {
      mainPlaylists.innerHTML += `
  <li id="card${i}">
    <a class="c-main__card" href="#">
      <h3>${mainPlaylistsTitle[i - 1]}</h3>
      <img src="./src/assets/playlist/${i}.jpeg">
    </a>
  </li>
  `;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    PopularPlaylists();
  });

  // Search
  const searchForm = document.getElementById('search-form');
  const artistsSearch = document.getElementById('search-input');
  const mainTitle = document.querySelector('.c-main__title');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  artistsSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (!searchTerm) {
      PopularPlaylists();
      return;
    }

    requestApi(searchTerm);
  });

  function requestApi(searchTerm) {
    const url = `http://localhost:4000/artists?name_like=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result));
  }

  function displayResults(result) {
    if (result.length === 0) {
      mainTitle.innerText = 'Nenhum resultado encontrado...';
      mainPlaylists.innerHTML = '';
      return;
    }

    if (result.length > 0) {
      mainTitle.innerText = 'Artistas';
      mainPlaylists.innerHTML = '';
      result.forEach((result) => {
        mainPlaylists.innerHTML += `
      <li id="artist${result.id}">
        <a class="c-main__artist" href="#">
        <div>
          <img src="${result.urlImg}">
          <button type="button">
          <i class="fa-solid fa-play"></i>
          </button>
        </div>
        <h3>${result.name}</h3>
        <p>Artista</p>
        </a>
      </li>
      `;
      });
      return;
    }
  }
};

export default search;
