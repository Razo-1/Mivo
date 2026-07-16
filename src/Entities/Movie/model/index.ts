import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectMovie } from "../MoviAPI";
import type { IMovieVideoResponse } from "../Types";

export const movieThunk = createAsyncThunk(
    'getMovie',
    async () => {
       const movie = await selectMovie.getMovi()
       return movie.data
    }
)

const initialState: IMovieVideoResponse = {
    id: 0,
    results: []
}
const movieSlice = createSlice({
    name : 'getMovie',
    initialState,
    reducers : {},
    extraReducers(builder){
    builder.addCase(movieThunk.fulfilled,(state,action) => {
        state.id = action.payload.id;
        state.results = action.payload.results;
    })
}
})

export default movieSlice.reducer