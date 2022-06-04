import { IGenre } from "../../genre/interfaces";
import {IMovie} from "./movie.interface";

export interface IMovieDetails extends IMovie{
  overview: string;
  backdrop_path: string;
  genres: IGenre[];
}
