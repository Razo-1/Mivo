import { ApiConfige } from "../../../Shared/ApiConfige";
import type { ITVResponse } from "../types";

class TvShowAPI extends ApiConfige {
    async getShow(page : number = 3){
        return await this.getApi().get<ITVResponse>(`/tv/popular?page=${page}`);
    }
}


export const show = new TvShowAPI()