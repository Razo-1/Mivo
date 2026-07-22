import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, IMovie } from "../../../Shared/Types";

class MediaGenresAPI extends ApiConfige {
  async tvGenresAPI(genId: number, page: number) {
    return this.getApi().get<IListState<IMovie>>(
      `/discover/tv?with_genres=${genId}&page=${page}`
    );
  }
}

export const tvGen = new MediaGenresAPI();