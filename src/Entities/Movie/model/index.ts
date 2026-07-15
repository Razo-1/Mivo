import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectMovie } from "../MoviAPI";

export const movieThunk = createAsyncThunk(
    'getMovie',
    async () => {
       const movie = await selectMovie.getMovi()
       return movie.data
    }
)

const initialState : any = {}

const movieSlice = createSlice({
    name : 'getMovie',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(movieThunk.fulfilled,(state,action) => {
            state.movie = action.payload
        })
    }
})

export default movieSlice.reducer