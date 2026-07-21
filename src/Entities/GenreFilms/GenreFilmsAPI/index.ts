import { ApiConfige } from "../../../Shared/ApiConfige";

class GenreFilmsAPI extends ApiConfige {
    async getGenFilm(genreId : number,page : number){
        return await this.getApi().get(`/discover/movie?with_genres=${genreId}&page=${page}`)
    }
}

export const genFilm = new GenreFilmsAPI();