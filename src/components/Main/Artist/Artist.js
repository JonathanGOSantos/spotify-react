import React, { useState, useEffect } from 'react';
import './Artist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Artist = ({ artist }) => {
  const [mainArtists, setMainArtists] = useState([]);

  useEffect(() => {
    const artistsData = artist.map((artist) => ({
      id: `artist${artist.id}`,
      name: artist.name,
      urlImg: artist.urlImg,
    }));
    setMainArtists(artistsData);
  }, [artist]);
  return (
    <ul className="c-main__cards">
      {mainArtists.map((artist) => (
        <li id={`artist${artist.id}`} key={`artist${artist.id}`}>
          <a class="c-main__artist" href="#">
            <div>
              <img src={artist.urlImg} alt={artist.name} />
              <button type="button">
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
            <h3>{artist.name}</h3>
            <p>Artista</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Artist;
