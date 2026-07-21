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
export interface IGenreFilmResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}