import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class GenreFilmsAPI extends ApiConfige {
    async getGenFilm(genreId : number,page : number){
        return await this.getApi().get<IListState<IMovie>>(`/discover/movie?with_genres=${genreId}&page=${page}`)
    }
}

export const genFilm = new GenreFilmsAPI();