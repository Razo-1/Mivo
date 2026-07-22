import type { IMovie } from "../../../Shared/Types";

export interface IPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for: IKnownFor[];
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export type IKnownFor = IMovie | ITV;


export interface ITV {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: "tv";
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  softcore: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IActorState {
  actors: IPerson[];
}