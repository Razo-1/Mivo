import type { ITvShow } from "../../../Shared/Types";

export interface FindShowState {
    find: ITvShow[];
    totalPages: number | null;
    query: string | null;
}