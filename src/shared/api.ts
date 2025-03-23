import axios from "axios";
import { IMovieRDO } from "./api.rdo";

const axiosMoviesInstance = axios.create({
  baseURL: "https://www.omdbapi.com",
});

const axiosMovies = {
  getMovies: async (eMovie: string) => {
    const response = await axiosMoviesInstance.get<IMovieRDO>("", {
      params: {
        apiKey: "505480d7",
        s: eMovie,
      },
    });
    return response.data;
  },
  getMovieInfo: async (movieID: string) => {
    const response = await axiosMoviesInstance.get("", {
    params:{
      apiKey: "505480d7",
      i: movieID
    }
    })
    return response.data
  }
};



export default axiosMovies;
