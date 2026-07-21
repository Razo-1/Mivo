import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IFind } from "../types";

class MovieFinderAPI extends ApiConfige {
    async getFindMovie(query : string,page : number){
        return await this.getApi().get<IFind>(`/search/movie?query=${query}&page=${page}`)
    }
}

export const finder = new MovieFinderAPI();