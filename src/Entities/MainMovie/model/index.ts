import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { selectMainMovie } from "../MainMoveAPI"; 
import type { IMovieVideoResponse } from "../types";

export const MainMovieThunk = createAsyncThunk<IMovieVideoResponse,number>(
    'getMainMovie',
    async (filmId) => {
       const movie = await selectMainMovie.getMovi(filmId)
       return movie.data
    }
)

const initialState: IMovieVideoResponse = {
    id: 0,
    results: []
}
const MainMovieSlice = createSlice({
    name : 'getMainMovie',
    initialState,
    reducers : {},
    extraReducers(builder){
    builder.addCase(MainMovieThunk.fulfilled,(state,action : PayloadAction<IMovieVideoResponse>) => {
        state.id = action.payload.id;
        state.results = action.payload.results;
    })
}
})

export default MainMovieSlice.reducer