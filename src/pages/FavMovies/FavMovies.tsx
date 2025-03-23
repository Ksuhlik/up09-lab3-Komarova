import { useNavigate } from "react-router-dom"
import Feed from "../../components/Feed/Feed";
import { useState } from "react";


const FavMovies = () => {

    const [movies, setMovies] = useState([])

    const navigate = useNavigate();

    const clickBack = () => {
        navigate(-1)
    }

    return(
        <div>
            <button onClick={clickBack}>Back</button>
            <Feed movies={movies}/>
        </div>
    )
}

export default FavMovies