import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail.js";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <MovieDetail
                    id={id}
                    title={movie.title_long}
                    background={movie.background_image}
                    like={movie.like_count}
                    year={movie.year}
                />
            )}
        </div>
    );
}
export default Detail;
