import { ApiConfige } from "../../../Shared/ApiConfige";
import type { GenresState } from "../Types";

class Genres extends ApiConfige{ 
    
    async chooseGenres(){
        return await this.getApi()
        .get<GenresState>(`/genre/movie/list?api_key=${this.ApiKey}&language=en-US`);
    }
}

export const generAPI = new Genres()