import { ApiConfige } from "../../../Shared/ApiConfige";

class MediaGenresAPI extends ApiConfige {
  async tvGenresAPI(genId: number, page: number) {
    return this.getApi().get(
      `/discover/tv?with_genres=${genId}&page=${page}`
    );
  }
}

export const tvGen = new MediaGenresAPI();