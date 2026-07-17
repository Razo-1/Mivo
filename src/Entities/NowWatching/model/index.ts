import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import type { IListState,IMovie } from "../../../Shared/Types";
import { watch } from "../watchingAPI";

export const watchThunk = createAsyncThunk(
    'getWatch',
    async () => {
        const response = await watch.getWatching();
        return response.data.results
    }
)


const initialState : IListState<IMovie> = {
    item : []
}

const watchSlice = createSlice({
    name : 'getWarch',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(watchThunk.fulfilled,(state,action) => {
            state.item = action.payload;
        })
    }
})



export default watchSlice.reducer;
