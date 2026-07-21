import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { reals } from "../ReleasesAPI";
import type { IListState,IMovie } from "../../../Shared/Types";

export const relseThunk =  createAsyncThunk<IListState<IMovie>,number>(
    'getRelease',
    async (page) => {
        const response = await reals.getReleases(page)
        return response.data
    }
)

const initialState  : IListState<IMovie> = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
}

const relseSlice = createSlice({
    name : 'getRelease',
    initialState,
    reducers : {
        changPage(state,action){
            state.total_pages = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(relseThunk.fulfilled,(state,action) => {
            state.results = action.payload.results
            state.total_pages = action.payload.total_pages
        })
    }
})

export default relseSlice.reducer