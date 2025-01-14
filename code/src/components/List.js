/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return (
          <div className="movie-poster" key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <div className="movie-card">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-release-date">{movie.release_date}</p>
              </div>
              <img
                className="movie-poster-img"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.original_title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
