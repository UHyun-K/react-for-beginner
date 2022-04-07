function MovieDetail({ id, title, background, like, year }) {
    return (
        <div key={id}>
            <h1>{title}</h1>
            <img src={background} alt={id} />
            <p>Like:{like}</p>
            <p>release: {year}</p>
        </div>
    );
}
export default MovieDetail;
