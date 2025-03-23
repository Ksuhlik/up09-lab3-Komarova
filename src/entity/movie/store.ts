import { create } from "zustand"


interface MovieState {
    movies: number
    increase: (by: number) => void
    decrease: (by: number) => void
}

const useMovieStore = create<MovieState>()((set)=>({
    movies: 0,
    increase: (by) => set((state) => ({movies: state.movies + by})),
    decrease: (by) => set((state) => ({movies: state.movies - by}))
}))