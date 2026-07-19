import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IMovieVideoResponse } from "../Types";

class MoviAPI extends ApiConfige {
    async getMovi(){
        return await this.getApi().get<IMovieVideoResponse>(`/tv/278624/videos`)
    }
}

export const selectMovie = new MoviAPI()