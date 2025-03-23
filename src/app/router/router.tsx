import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import MoviePage from "../../pages/MoviePage/MoviePage";
import FavMovies from "../../pages/FavMovies/FavMovies";


const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage/>
    },
    {
        path: '/movies/:imdbId',
        element: <MoviePage/>
    },
    {
        path: '/movies/favourite',
        element: <FavMovies/>
    }
])

export default router