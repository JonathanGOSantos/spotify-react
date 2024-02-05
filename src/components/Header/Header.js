// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  // Recebendo a função onSearch como propriedade
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Chamando a função onSearch passada como propriedade
  };

  return (
    <header className="c-main__header">
      <nav className="c-main__nav">
        <div class="c-nav__pages">
          <button class="c-nav__left" type="button">
            <img src="./icons/small-left.png" alt="Voltar página" />
          </button>
          <button class="c-nav__right" type="button" disabled>
            <img src="./icons/small-right.png" alt="Avançar página" />
          </button>

          <form className="c-nav__search" id="search-form">
            <input
              className="c-nav__input"
              id="search-input"
              type="search"
              maxLength="100"
              placeholder="O que você quer ouvir hoje?"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </form>
        </div>

        <div className="c-nav__account">
          <a className="c-nav__sign-in" href="#">
            Inscrever-se
          </a>
          <a className="c-nav__login" href="#">
            Entrar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
