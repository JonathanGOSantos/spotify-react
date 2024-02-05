import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__content">
        <h2 className="c-footer__title">Testar o Premium de graça</h2>
        <p className="c-footer__desc">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>

      <a className="c-footer__btn" href="#">
        Inscreva-se grátis
      </a>
    </footer>
  );
};

export default Footer;