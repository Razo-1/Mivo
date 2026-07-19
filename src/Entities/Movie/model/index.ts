import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { selectMovie } from "../MoviAPI";
import type { IMovieVideoResponse } from "../Types";

export const movieThunk = createAsyncThunk<IMovieVideoResponse>(
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
    builder.addCase(movieThunk.fulfilled,(state,action : PayloadAction<IMovieVideoResponse>) => {
        state.id = action.payload.id;
        state.results = action.payload.results;
    })
}
})

export default movieSlice.reducer