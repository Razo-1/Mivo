import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { show } from "../tvShowAPI";
import type { IShowState } from "../types";
import type { IListState, ITvShow } from "../../../Shared/Types";

export const showThunk = createAsyncThunk<IListState<ITvShow>,number>(
    'getShow',
    async (page) => {
        const response = await show.getShow(page);
        return response.data
    }
)

const initialState : IShowState = {
    show : [],
    total_pages : 0,
}

const showSlice = createSlice({
    name : 'getShow',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(showThunk.fulfilled,(state,action) =>{
            state.show = action.payload.results,
            state.total_pages = action.payload.total_pages
        })
    }
})

export default showSlice.reducer