import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genFilm } from "../GenreFilmsAPI";
import type { IGenreFilmParams, IGenreFilmResponse, IGenreFilmState } from "../types";



export const genFilmThunk = createAsyncThunk<
  IGenreFilmResponse,
  IGenreFilmParams
>(
  "getGenFilm",
  async ({ genreId, page }) => {
    const response = await genFilm.getGenFilm(genreId, page);
    return response.data;
  }
);

const initialState: IGenreFilmState = {
  data: [],
  total_Gen_pages: null,
  genreId : null
};

const genFilmSlice = createSlice({
  name: "getGenFilm",
  initialState,
  reducers: {
    cleaningData(state){
        state.data = [];
        state.total_Gen_pages = null;
        state.genreId = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(genFilmThunk.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.total_Gen_pages = action.payload.total_pages;
      state.genreId = action.meta.arg.genreId
    });
  },
});

export default genFilmSlice.reducer;
export const { cleaningData } = genFilmSlice.actions