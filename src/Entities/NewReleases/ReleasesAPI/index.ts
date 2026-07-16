import { ApiConfige } from "../../../Shared/ApiConfige";

class ReleasesAPI extends ApiConfige {
    async getReleases(){
        return await this.getApi().get('/movie/now_playing')
    }
}

export const reals = new ReleasesAPI()