import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
        <div className="card-body">
          <h4>{movie.Title}{movie.Year}</h4>
          <p>{movie.Type}</p>
        </div>

      </div>
    </div>
  )
}
//en esta parte vamos a validar los tipos de datos
Card.propTypes = {
  movie: PropTypes.shape({//Escribir un objeto
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired
}

export default Card;