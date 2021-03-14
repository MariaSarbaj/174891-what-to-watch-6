import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {FILMS} from './mocks/films';

ReactDOM.render(
    <App
      title="The Grand Budapest Hotel"
      genre="Drama"
      year="2014"
      films = {FILMS}
    />,
    document.querySelector(`#root`)
);

