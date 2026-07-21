import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IMovieVideoResponse } from "../types";

class MainMoviAPI extends ApiConfige {
    async getMovi(filmId : number){
        return await this.getApi().get<IMovieVideoResponse>(`/movie/${filmId}/videos`)
    }
}

export const selectMainMovie = new MainMoviAPI()