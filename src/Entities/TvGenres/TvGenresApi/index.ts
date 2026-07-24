import { ApiConfige } from "../../../Shared/ApiConfige";
import type { GenresState } from "../../../Shared/Types"; 

class TvGenres extends ApiConfige {
    async chooseTvGenres(){
        return await this.getApi()
        .get<GenresState>(`/genre/tv/list?language=en-US`);
    }
}

export const tvGenresAPI = new TvGenres();
