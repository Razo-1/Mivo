import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IDat } from "../Types";

class Genres extends ApiConfige{ 
    
    async chooseGenres(){
        return await this.getApi()
        .get<Array<IDat>>(`/genre/movie/list?api_key=${this.ApiKey}&language=en-US`);
    }
}

export const generAPI = new Genres()