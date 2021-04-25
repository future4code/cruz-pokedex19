import { Nav } from './styled';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Pagination = ({ pokesPerPage, totalPokes, paginate }) => {
  let pageNumber = Number(window.location.pathname.split('/')[2]) || 1;
  const lastPage = Math.ceil(totalPokes / pokesPerPage);

  const prev = (pageNumber) => {
    if (pageNumber > 1) {
      paginate(pageNumber - 1);
    }
  };

  const next = (pageNumber) => {
    if (!pageNumber) {
      paginate(2);
    } else {
      paginate(pageNumber + 1);
    }
  };

  const goToPokedex = () => {
    history.push('/pokedex');
  };

  return (
    <Nav>
      <div className="info">
        {pageNumber > 1 && (
          <div>
            <button onClick={() => prev(pageNumber)}>🠔</button>
          </div>
        )}
        <div className="main">
          <p>
            Página {pageNumber} de {lastPage}
          </p>
        </div>
        {pageNumber < lastPage && (
          <div className="arrow">
            <button onClick={() => next(pageNumber)}>➙</button>
          </div>
        )}
      </div>
      <div>
        <a class="nes-btn is-small" onClick={goToPokedex}>
          Pokédex
        </a>
      </div>
    </Nav>
  );
};

export default Pagination;
