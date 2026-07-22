import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, ITvShow } from "../../../Shared/Types";

class TvShowAPI extends ApiConfige {
    async getShow(page : number = 3){
        return await this.getApi().get<IListState<ITvShow>>(`/tv/popular?page=${page}`);
    }
}


export const show = new TvShowAPI()