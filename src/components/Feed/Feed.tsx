import { IMovie } from "../../shared/api.rdo"
import MovieItem from "../MovieItem/MovieItem"
import "./Feed.css"


const Feed = ({ movies }: { movies: IMovie[] }) => {

    return (
        <div className="feed">
            {movies.map((movie) => (<MovieItem key={movie.imdbID} {...movie} />))}
        </div>
    )
}

export default Feed