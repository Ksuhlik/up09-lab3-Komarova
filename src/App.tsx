import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import axiosMovies from "./shared/api";
import { IMovie } from "./shared/api.rdo";
import Feed from "./components/Feed/Feed";
import "./App.css"

function App() {
  const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState<IMovie[]>([])

  const searchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMovies((await axiosMovies.getMovies(movie)).Search)
    console.log(movies)
  }

  return (
    <div className="container">
      <form action="" onSubmit={searchMovie}>
        <Input value={movie} setValue={setMovie}></Input>
        <Button>Search</Button>
      </form>

      <Feed movies={movies} />

    </div>
  )
}
export default App