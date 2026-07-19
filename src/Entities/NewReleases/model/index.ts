import { createAsyncThunk,createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { reals } from "../ReleasesAPI";
import type { IListState,IMovie } from "../../../Shared/Types";

export const relseThunk =  createAsyncThunk<Array<IMovie>>(
    'getRelease',
    async () => {
        const response = await reals.getReleases()
        return response.data.results
    }
)

const initialState  : IListState<IMovie> = {
    results : []
}

const relseSlice = createSlice({
    name : 'getRelease',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(relseThunk.fulfilled,(state,action : PayloadAction<Array<IMovie>>) => {
            state.results = action.payload
        })
    }
})

export default relseSlice.reducer