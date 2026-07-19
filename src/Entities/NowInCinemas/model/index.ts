import { createSlice,createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { cinemas } from "../incCinemasAPI";
import type { IListState,IMovie } from "../../../Shared/Types";

export const cinamntThunk = createAsyncThunk<Array<IMovie>>(
    'getCinemas',
    async () => {
        const response = await cinemas.getCinemas();
        return response.data.results
    }
)

const initialState : IListState<IMovie>  = {
    results : []
}

const cinemasSlice = createSlice({
    name : 'getCinemas',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(cinamntThunk.fulfilled,(state,action : PayloadAction<Array<IMovie>>) => {
            state.results = action.payload
        })
    }
})

export default cinemasSlice.reducer;