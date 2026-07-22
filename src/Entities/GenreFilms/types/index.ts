import type { IMovie } from "../../../Shared/Types";

export interface IGenreFilmParams {
  genreId: number;
  page: number;
}

export interface IGenreFilmState {
  data: IMovie[];
  total_Gen_pages: number | null;
  genreId: number | null;
}
