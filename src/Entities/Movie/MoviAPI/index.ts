import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IMovieVideoResponse } from "../Types";

class MoviAPI extends ApiConfige {
    async getMovi(filmId : number = 1368337){
        return await this.getApi().get<IMovieVideoResponse>(`/movie/${filmId}/videos`)
    }
}

export const selectMovie = new MoviAPI()