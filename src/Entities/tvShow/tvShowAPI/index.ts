import { ApiConfige } from "../../../Shared/ApiConfige";
import type { ITVResponse } from "../types";

class TvShowAPI extends ApiConfige {
    async getShow(){
        return await this.getApi().get<ITVResponse>(`/tv/popular?page=3`);
    }
}


export const show = new TvShowAPI()