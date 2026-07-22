import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState } from "../../../Shared/Types";


class ActorAPI extends ApiConfige {
    async getActor(){
        return await this.getApi().get<IListState>(`/person/popular?page=10`)
    }
}

export const actor = new ActorAPI()