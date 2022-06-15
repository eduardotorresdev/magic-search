import "./Movie.sass";

interface MovieProps {
    skeleton?: boolean;
    image?: string;
    title?: string;
    genres?: string[];
    score?: number;
}

const Movie = ({
    skeleton = false,
    image = "",
    title = "",
    genres = [],
    score,
}: MovieProps) => (
    <div className={`movie ${skeleton && "movie--skeleton"}`}>
        <span className="movie__loading" hidden={!skeleton}>Carregando...</span>
        <div className="movie__media" hidden={skeleton}>
            <img src={image} alt={title} className="movie__img" />
        </div>
        <h2 className="movie__title" hidden={skeleton}>{title}</h2>
        <span className="movie__score" hidden={skeleton}>
            {score && `Classificação: ${score} 🍿`}
        </span>
        <p className="movie__genre-label" hidden={skeleton}>Gêneros</p>
        <ul className="movie__genres" hidden={skeleton}>
            {genres.map((genre) => (
                <li className="movie__genre">{genre}</li>
            ))}
        </ul>
    </div>
);

export default Movie;
