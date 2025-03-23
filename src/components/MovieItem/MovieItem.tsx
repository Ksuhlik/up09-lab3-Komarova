import { Link } from "react-router-dom"
import axiosMovies from "../../shared/api"
import { IMovie } from "../../shared/api.rdo"
import "./MovieItem.css"

const MovieItem = ({Poster, Title, Year, Type, imdbID}: IMovie) => {

    const handleClick = async () => {
        axiosMovies.getMovieInfo(imdbID)
    }

    return(
        <div className="movieFeed">
            <img className="moviePoster" src={Poster} />
            <div className="movieInfo">
                <h3 className="movieTitle" onClick={handleClick}><Link to={"/movies/"+imdbID}>{Title}</Link></h3>
                <h2 className="movieYear">{Year}</h2>
                <h2 className="movieType">{Type.toUpperCase()}</h2>
                {/* <h2 className="movieID">{imdbID}</h2> */}
            </div>
        </div>
    )
}

export default MovieItem