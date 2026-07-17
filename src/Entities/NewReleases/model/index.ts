import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { reals } from "../ReleasesAPI";
import type { IListState,IMovie } from "../../../Shared/Types";

export const relseThunk =  createAsyncThunk(
    'getRelease',
    async () => {
        const response = await reals.getReleases()
        return response.data.results
    }
)

const initialState  : IListState<IMovie> = {
    item : []
}

const relseSlice = createSlice({
    name : 'getRelease',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(relseThunk.fulfilled,(state,action) => {
            state.item = action.payload
        })
    }
})

export default relseSlice.reducer