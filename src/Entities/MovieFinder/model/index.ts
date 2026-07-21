import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { finder } from "../MovieFinderAPI";
import type { FindParams, FindState, IFind } from "../types";

export const findThunk = createAsyncThunk<IFind, FindParams>(
    'getFind',
    async ({ query,page }) => {
        const response = await finder.getFindMovie(query,page);
        return response.data
    }
)

const initialState : FindState = {
    find : [],
    totalPages : null,
    query : null
}

const findSlice = createSlice({
    name : 'getFind',
    initialState ,
    reducers : {
        changQuery(state,action){
            state.query = action.payload;
        },
        cleaning(state){
            state.find = [];
            state.totalPages = null;
            state.query = null;
        }
    },
    extraReducers(builder){
        builder.addCase(findThunk.fulfilled,(state,action) => {
            state.find = action.payload.results;
            state.totalPages = action.payload.total_pages;
        })
    }
})

export default findSlice.reducer
export const { changQuery,cleaning } = findSlice.actions