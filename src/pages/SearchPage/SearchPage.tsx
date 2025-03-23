import { useState } from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import axiosMovies from "../../shared/api"
import Feed from "../../components/Feed/Feed"
import { IMovie } from "../../shared/api.rdo"
import { useNavigate } from "react-router-dom"

const SearchPage = () => {
  const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState<IMovie[]>([])
  const navigate = useNavigate();
  const searchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMovies((await axiosMovies.getMovies(movie)).Search)
    console.log(movies)
  }
  const handleClick = () => {
    navigate("/movies/favourite")
  }

  return (
    <div className="container">
      <form action="" onSubmit={searchMovie}>
        <Input value={movie} setValue={setMovie}></Input>
        <Button>Search</Button>
        <button onClick={handleClick}>Likes</button>
      </form>

      <Feed movies={movies} />

    </div>
  )
}
export default SearchPage