

export interface IResult {
    results : IMovie[]
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    media_type?: string;
    original_language: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ITvShow {
    adult: boolean;
    backdrop_path: string | null;
    first_air_date?: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
}


export interface IListState<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

export interface IFilmCard {
    id: number;
    poster_path: string | null;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
}

export interface IMainCard {
    results : IFilmCard[]
}

export interface IFilmsProps {
    results: IFilmCard[];
    text: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface GenresState  {
    genres : Array<IGenre>
}




export interface ISectionHeaderText {
    text : string
}