import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { show } from "../tvShowAPI";

export const showThunk = createAsyncThunk(
    'getShow',
    async () => {
        const response = await show.getShow();
        return response.data.results
    }
)

const initialState = {
    show : [],
}

const showSlice = createSlice({
    name : 'getShow',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(showThunk.fulfilled,(state,action) =>{
            state.show = action.payload
        })
    }
})

export default showSlice.reducer