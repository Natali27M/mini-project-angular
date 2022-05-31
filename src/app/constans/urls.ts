import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  movie: `${API}/discover/movie?api_key=0e17bf058d06dbd99f156ed017f543b4`,
  genre: `${API}/genre/movie/list?api_key=0e17bf058d06dbd99f156ed017f543b4`,
  video: `${API}/movie`
}
