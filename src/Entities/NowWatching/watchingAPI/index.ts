import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class WatchingAPI extends ApiConfige {
    async getWatching(){
        return await this.getApi().get<IListState<IMovie>>(`/trending/movie/day`);
    }
}


export const watch = new WatchingAPI()