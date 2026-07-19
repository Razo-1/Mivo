import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IPersonResponse } from "../types";

class ActorAPI extends ApiConfige {
    async getActor(){
        return await this.getApi().get<IPersonResponse>(`/person/popular?page=10`)
    }
}

export const actor = new ActorAPI()