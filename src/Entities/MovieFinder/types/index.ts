import type { IMovie } from "../../../Shared/Types";

export interface IFind {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface FindState {
    find: IMovie[];
    totalPages : number | null;
    query : string | null
}

export interface FindParams {
    query: string;
    page: number;
}