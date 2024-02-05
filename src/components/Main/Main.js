// Main.js
import React, { useState } from 'react';
import Header from '../Header/Header';
import './Main.css';
import Playlist from './Playlist/Playlist';
import Artist from './Artist/Artist';

const Main = () => {
  const [mainTitle, setMainTitle] = useState('Navegar por todas as seções');
  const [content, setContent] = useState(<Playlist />);

  function displayResults(result) {
    if (result.length === 0) {
      setMainTitle('Nenhum resultado encontrado...');
      setContent(<Artist artist={result} />);
    }
    if (result.length > 0) {
      setMainTitle('Artistas');
      setContent(<Artist artist={result} />);
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setMainTitle('Navegar por todas as seções');
      return setContent(<Playlist />);
    }
    const url = `http://localhost:4000/artists?name_like=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result));
  };

  return (
    <main className="c-main">
      <Header onSearch={handleSearch} />{' '}
      {/* Passando a função handleSearch como propriedade */}
      <section className="c-main__content">
        <h2 className="c-main__title">{mainTitle}</h2> {content}
      </section>
    </main>
  );
};

export default Main;
