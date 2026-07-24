import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mediaFind } from "../MediaShowAPI";
import type { FindShowParams, IListState, ITvShow } from "../../../Shared/Types";
import type { FindShowState } from "../types";





export const findShowThunk = createAsyncThunk<IListState<ITvShow>, FindShowParams>(
    'findShow',
    async ({ query, page }) => {
        const response = await mediaFind.FindShow(query, page);
        return response.data;
    }
);

const initialState: FindShowState = {
    find: [],
    totalPages: null,
    query: null
};

const findShowSlice = createSlice({
    name: 'findShow',
    initialState,
    reducers: {
        changShowQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        cleaningShow(state) {
            state.find = [];
            state.totalPages = null;
            state.query = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(findShowThunk.fulfilled, (state, action) => {
            state.find = action.payload.results;
            state.totalPages = action.payload.total_pages;
        });
    }
});

export default findShowSlice.reducer;
export const { changShowQuery, cleaningShow } = findShowSlice.actions;
