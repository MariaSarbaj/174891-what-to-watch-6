import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-header.jpg"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
        </header>
      </section>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">Page Not Found</h2>
        </div>

        <Link to="/" className="btn btn--play movie-card__button">
          <span>Вернуться на Главную</span>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
