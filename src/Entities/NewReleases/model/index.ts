import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { reals } from "../ReleasesAPI";
import type { IMovie } from "../Types";

export const relseThunk =  createAsyncThunk(
    'getRelease',
    async () => {
        const response = await reals.getReleases()
        return response.data.results
    }
)

const initialState : IMovie = {
    release : []
}

const relseSlice = createSlice({
    name : 'getRelease',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(relseThunk.fulfilled,(state,action) => {
            state.release = action.payload
        })
    }
})

export default relseSlice.reducer