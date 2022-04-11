import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css"

function Movie({ id, coverImg, title, year, summary,  genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title}  className={styles.movie_img}/>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
                {genres == null ? "" : genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.String),
};

export default Movie;
