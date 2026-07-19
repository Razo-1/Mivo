import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IMovieInfo } from "../Types";

class InfoMovieAPI extends ApiConfige{
    async getInfoMovie(){
        return await this.getApi().get<IMovieInfo>(`/movie/${278624}?api_key=${this.ApiKey}&language=en-US`)
    }
}

export const selectedInfoMovie = new InfoMovieAPI()