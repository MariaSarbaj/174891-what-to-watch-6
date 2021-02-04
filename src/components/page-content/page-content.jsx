import React from 'react';
import SmallMovieCard from "../small-movie-card/small-movie-card";

const FILMS = [
  {
    "title": `Fantastic Beasts: The Crimes of Grindelwald`,
    "img": `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },

  {
    "title": `Bohemian Rhapsody`,
    "img": `img/bohemian-rhapsody.jpg`
  },

  {
    "title": `Macbeth`,
    "img": `img/macbeth.jpg`
  },

  {
    "title": `Aviator`,
    "img": `img/aviator.jpg`
  },

  {
    "title": `We need to talk about Kevin`,
    "img": `img/we-need-to-talk-about-kevin.jpg`
  },

  {
    "title": `What We Do in the Shadows`,
    "img": `img/what-we-do-in-the-shadows.jpg`
  },

  {
    "title": `Revenant`,
    "img": `img/revenant.jpg`
  },

  {
    "title": `Johnny English`,
    "img": `img/johnny-english.jpg`
  },

  {
    "title": `Shutter Island`,
    "img": `img/shutter-island.jpg`
  },

  {
    "title": `Pulp Fiction`,
    "img": `img/pulp-fiction.jpg`
  },

  {
    "title": `No Country for Old Men`,
    "img": `img/no-country-for-old-men.jpg`
  },

  {
    "title": `Snatch`,
    "img": `img/snatch.jpg`
  },

  {
    "title": `Moonrise Kingdom`,
    "img": `img/moonrise-kingdom.jpg`
  },

  {
    "title": `Seven Years in Tibet`,
    "img": `img/seven-years-in-tibet.jpg`
  },

  {
    "title": `Midnight Special`,
    "img": `img/midnight-special.jpg`
  },

  {
    "title": `War of the Worlds`,
    "img": `img/war-of-the-worlds.jpg`
  },

  {
    "title": `Dardjeeling Limited`,
    "img": `img/dardjeeling-limited.jpg`
  },

  {
    "title": `Orlando`,
    "img": `img/orlando.jpg`
  },

  {
    "title": `Mindhunter`,
    "img": `img/mindhunter.jpg`
  },

  {
    "title": `Midnight Special`,
    "img": `img/midnight-special.jpg`
  },
];

const PageContent = () => {

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__movies-list">
          {
            FILMS.map((film, index) => <SmallMovieCard
              key={film + index}
              title={film.title}
              img={film.img}
            />)}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default PageContent;

