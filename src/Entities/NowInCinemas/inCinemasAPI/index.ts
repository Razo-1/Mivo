import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class InCinemasAPI extends ApiConfige {
    async getCinemas(){
        return await this.getApi().get<IListState<IMovie>>(`/movie/top_rated`)
    }
}

export const cinemas = new InCinemasAPI()