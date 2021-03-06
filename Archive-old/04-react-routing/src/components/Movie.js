import React from "react";
import PropTypes from "prop-types";
import movies from "../movies.json";


const Movie = ({ params: { movieId } }) => {
  const movie = movies.find(movie => movie.id === parseInt(movieId, 10));

  return (
    <div>
      <div className="movie-title">
        <h2>{movie.name}</h2>
        <hr />
      </div>

      <div className="movie-container">
        <div className="movie-image">
          <img alt={movie.name} src={movie.image} />
        </div>

        <div className="movie-information">
          <p>
            <b>Director:</b> {movie.director}
          </p>
          <p>
            <b>Released Date:</b> {movie.released}
          </p>
          <p>
            <b>Discription:</b> {movie.discription}
          </p>
        </div>
      </div>

      <div className="movie-reviews">
        <h2>Reviews</h2>
        <hr />

        {movie.reviews.map((review, i) => (
          <div key={i} className="movie-review">
            <h3>
              {review.title}
              <span classname="review-author"> by{review.author}</span>
            </h3>
            <p>{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Movie.PropTypes = {
  params: PropTypes.shape({
    movieId: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
