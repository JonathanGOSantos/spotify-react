// Playlist.js
import React, { useState, useEffect } from 'react';
import './Playlist.css';

const Playlist = () => {
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

  const [mainPlaylists, setMainPlaylists] = useState([]);

  const PopularPlaylists = () => {
    const playlistsData = [];
    for (let i = 1; i <= 15; i++) {
      playlistsData.push({
        id: `card${i}`,
        title: mainPlaylistsTitle[i - 1],
        imageSrc: `./playlist/${i}.jpeg`,
      });
    }

    setMainPlaylists(playlistsData);
  };

  useEffect(() => {
    PopularPlaylists();
  }, []);

  return (
    <ul id="main-playlists" className="c-main__cards">
      {mainPlaylists.map((playlist) => (
        <li id={`${playlist.id}`} key={`${playlist.id}`}>
          <a className="c-main__card" href="#">
            <h3>{playlist.title}</h3>
            <img src={playlist.imageSrc} alt={playlist.title} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
