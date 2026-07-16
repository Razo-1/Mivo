import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectedInfoMovie } from "../infoMovieAPI";
import type { info } from "../Types";

export const infoMovieThunk = createAsyncThunk(
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
        builder.addCase(infoMovieThunk.fulfilled,(state,action) => {
            state.infoMovie = action.payload
        })
    }
})

export default infoMovieSlice.reducer