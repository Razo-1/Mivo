import { ApiConfige } from "../../../Shared/ApiConfige";

class MoviAPI extends ApiConfige {
    async getMovi(){
        return await this.getApi().get(`/tv/278624/videos`)
    }
}

export const selectMovie = new MoviAPI()