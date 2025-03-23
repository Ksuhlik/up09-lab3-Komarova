import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axiosMovies from "../../shared/api";
import { IMovieInfo } from "../../shared/api.rdo";
import "./MoviePage.css"

const MoviePage = () => {

    const { imdbId } = useParams<{ imdbId: string }>();
    const [movie, setMovie] = useState<IMovieInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    const saveClick = () => {
        
    }

    useEffect(() => {
        const fetchMovieInfo = async () => {
            try {
                const fetchedMovie = await axiosMovies.getMovieInfo(imdbId!);
                setMovie(fetchedMovie);
            } catch (err) {
                setError('Failed to fetch movie information');
                console.error(err);
            }
        };

        fetchMovieInfo();
    }, [imdbId]);

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-page">
            <div className="left">
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </div>
            <div className="right">
                <h1>{movie.Title.toLocaleUpperCase()}</h1>
                <h2>{movie.Genre}</h2>
                <h3>{movie.Plot}</h3>
            </div>
            <div className="button">
                <h3>
                    <button id="btn" onClick={saveClick}>Like</button>
                    <button id="btn" onClick={handleClick}>Back</button>
                </h3>
            </div>
        </div>
    );
}

export default MoviePage