import { ApiConfige } from "../../../Shared/ApiConfige";

class InfoMovieAPI extends ApiConfige{
    async getInfoMovie(){
        return await this.getApi().get<any>(`/movie/${278624}?api_key=${this.ApiKey}&language=en-US`)
    }
}

export const selectedInfoMovie = new InfoMovieAPI()