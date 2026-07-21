import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class ReleasesAPI extends ApiConfige {
    async getReleases(page : number = 1){
        return await this.getApi().get<IListState<IMovie>>(`/movie/now_playing?page=${page}`)
    }
}

export const reals = new ReleasesAPI()