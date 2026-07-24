import { ApiConfige } from "../../../Shared/ApiConfige";
import type { IListState, ITvShow } from "../../../Shared/Types";

class MediaShowAPI extends ApiConfige {
    async FindShow(query: string, page: number) {
        return await this.getApi().get<IListState<ITvShow>>(`/search/tv?query=${query}&page=${page}`);
    }
}

export const mediaFind = new MediaShowAPI();