import { ApiConfige } from "../../../Shared/ApiConfige";

class InCinemasAPI extends ApiConfige {
    async getCinemas(){
        return await this.getApi().get(`/movie/top_rated`)
    }
}

export const cinemas = new InCinemasAPI()