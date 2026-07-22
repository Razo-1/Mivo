import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tvGen } from "../mediaGenresAPI";
import type { IGenreFilmParams,IGenreFilmState } from "../types";
import type { IListState, IMovie } from "../../../Shared/Types";

export const mediaGenThunk = createAsyncThunk<IListState<IMovie>,IGenreFilmParams>(
  "genreFetcher",
  async ({ genId, page }) => {
    const response = await tvGen.tvGenresAPI(genId, page);
    return response.data;
  }
);

const initialState: IGenreFilmState = {
  data: [],
  total_Gen_pages: null,
  genId: null,
};

const mediaGenSlice = createSlice({
  name: "genreFetcher",
  initialState,
  reducers: {
    cleaningData(state) {
      state.data = [];
      state.total_Gen_pages = null;
      state.genId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(mediaGenThunk.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.total_Gen_pages = action.payload.total_pages;
      state.genId = action.meta.arg.genId;
    });
  },
});

export default mediaGenSlice.reducer;
export const { cleaningData } = mediaGenSlice.actions;