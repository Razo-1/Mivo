import { ApiConfige } from "../../../Shared/ApiConfige";

class WatchingAPI extends ApiConfige {
    async getWatching(){
        return await this.getApi().get(`/trending/movie/day`);
    }
}


export const watch = new WatchingAPI()