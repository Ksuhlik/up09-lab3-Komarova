export interface IMovieRDO {
    Response: string
    totalResults: string
    Search: IMovie[]
}
export interface IMovie{
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster:string
}
export interface IMovieInfo{
    Poster:string
    Title: string
    Genre: string
    Plot: string
}
