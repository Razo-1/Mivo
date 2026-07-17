import { ApiConfige } from "../../../Shared/ApiConfige";

class ActorAPI extends ApiConfige {
    async getActor(){
        return await this.getApi().get(`/person/popular?page=10`)
    }
}

export const actor = new ActorAPI()