import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useState} from "react";

function Movie({id, coverImg, title, summary, genres}) {
    return (<div>
                <img src={coverImg} alt="movie_cover_image"/>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    { genres.map(genre => <li key={genre}>{genre}</li> ) }
                </ul>
            </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf((PropTypes.string)).isRequired
}

export default Movie;