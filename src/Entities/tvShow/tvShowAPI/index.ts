import { ApiConfige } from "../../../Shared/ApiConfige";

class TvShowAPI extends ApiConfige {
    async getShow(){
        return await this.getApi().get(`/tv/popular?page=3`);
    }
}


export const show = new TvShowAPI()