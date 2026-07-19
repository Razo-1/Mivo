import { createSlice,createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { IListState,IMovie } from "../../../Shared/Types";
import { watch } from "../watchingAPI";

export const watchThunk = createAsyncThunk<Array<IMovie>>(
    'getWatch',
    async () => {
        const response = await watch.getWatching();
        return response.data.results
    }
)


const initialState : IListState<IMovie> = {
    results : []
}

const watchSlice = createSlice({
    name : 'getWarch',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(watchThunk.fulfilled,(state,action : PayloadAction<Array<IMovie>>) => {
            state.results = action.payload;
        })
    }
})



export default watchSlice.reducer;
