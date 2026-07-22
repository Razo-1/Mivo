import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class MovieFinderAPI extends ApiConfige {
    async getFindMovie(query : string,page : number){
        return await this.getApi().get<IListState<IMovie>>(`/search/movie?query=${query}&page=${page}`)
    }
}

export const finder = new MovieFinderAPI();