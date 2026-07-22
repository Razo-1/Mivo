import type { IMovie } from "../../../Shared/Types";

export interface FindState {
    find: IMovie[];
    totalPages : number | null;
    query : string | null
}

export interface FindParams {
    query: string;
    page: number;
}