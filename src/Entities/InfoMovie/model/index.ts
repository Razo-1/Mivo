import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { selectedInfoMovie } from "../infoMovieAPI";
import type { IMovieInfo, info } from "../Types";

export const infoMovieThunk = createAsyncThunk<IMovieInfo>(
    'getInfoMovie',
    async () => {
        const response = await selectedInfoMovie.getInfoMovie();
        return response.data
    }
)

const initialState :  info = {
    infoMovie : null
}


const infoMovieSlice = createSlice({
    name : 'getInfoMovie',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(infoMovieThunk.fulfilled,(state,action : PayloadAction<IMovieInfo>) => {
            state.infoMovie = action.payload
        })
    }
})

export default infoMovieSlice.reducer