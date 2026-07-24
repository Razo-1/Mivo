import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { tvGenresAPI } from "../TvGenresApi";
import type { GenresState, IGenre } from "../../../Shared/Types"; 

export const tvGenresThunk = createAsyncThunk<Array<IGenre>>(
    'getTvGen',
    async () => {
        const response = await tvGenresAPI.chooseTvGenres();
        return response.data.genres;
    }
);

const initialState: GenresState = {
    genres: []
};

const tvGenreSlice = createSlice({
    name: 'getTvGen',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(tvGenresThunk.fulfilled, (state, action: PayloadAction<Array<IGenre>>) => {
            state.genres = action.payload;
        });
    }
});

export default tvGenreSlice.reducer;
