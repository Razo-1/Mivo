import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { cinemas } from "../incCinemasAPI";
import type { IListState,IMovie } from "../../../Shared/Types";

export const cinamntThunk = createAsyncThunk(
    'getCinemas',
    async () => {
        const response = await cinemas.getCinemas();
        return response.data.results
    }
)

const initialState : IListState<IMovie>  = {
    item : []
}

const cinemasSlice = createSlice({
    name : 'getCinemas',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(cinamntThunk.fulfilled,(state,action) => {
            state.item = action.payload
        })
    }
})

export default cinemasSlice.reducer;