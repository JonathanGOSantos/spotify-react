import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faBook,
  faPlus,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <section className="c-sidebar">
      <nav className="c-sidebar__nav">
        <a className="c-sidebar__logo" href="#">
          <img
            className="logo-lg"
            src="./icons/logo-spotify.png"
            alt="Logo Spotify"
          />
        </a>

        <ul className="c-nav__menu">
          <li>
            <a className="c-nav__link" href="#">
              <FontAwesomeIcon icon={faHome} />
              <span className="btn__text">Início</span>
            </a>
          </li>
          <li>
            <a className="c-nav__link" href="#">
              <FontAwesomeIcon icon={faSearch} />
              <span className="btn__text">Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className="c-sidebar__library">
        <menu className="c-library__cta">
          <button className="c-library__cta__btn" type="button">
            <FontAwesomeIcon icon={faBook} />
            <span className="btn__text">Sua Biblioteca</span>
          </button>
          <button className="c-library__cta__btn" type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </menu>

        <section className="c-library__content">
          <article className="c-library__card a">
            <h2 className="c-library__card--title">
              Crie sua primeira playlist
            </h2>
            <p className="c-library__card--desc">É fácil, vamos te ajudar.</p>
            <button className="c-library__card--btn" type="button">
              Criar playlist
            </button>
          </article>

          <article className="c-library__card b">
            <h2 className="c-library__card--title">
              Que tal seguir um podcast novo?
            </h2>
            <p className="c-library__card--desc">
              Avisaremos sobre novos episódios.
            </p>
            <a href="#" className="c-library__card--btn" type="button">
              Explorar podcasts
            </a>
          </article>
        </section>

        <nav className="c-library__legal">
          <ul>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Centro de Privacidade</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Sobre Anúncios</a>
            </li>
            <li>
              <a href="#">Acessibilidade</a>
            </li>
            <li>
              <a href="#">Notice At Collection</a>
            </li>
            <li>
              <a href="#">Your Privacy Choice</a>
            </li>
          </ul>
        </nav>

        <button className="c-library__language" type="button">
          <FontAwesomeIcon icon={faGlobe} />
          <span className="btn__text">Português do Brasil</span>
        </button>
      </section>
    </section>
  );
};

export default Sidebar;
