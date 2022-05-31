import {IMovie} from "./movie.interface";

export interface IMovieDetails extends IMovie{
  overview: string;
}
