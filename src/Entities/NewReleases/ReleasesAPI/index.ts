import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class ReleasesAPI extends ApiConfige {
    async getReleases(){
        return await this.getApi().get<IListState<IMovie>>('/movie/now_playing')
    }
}

export const reals = new ReleasesAPI()