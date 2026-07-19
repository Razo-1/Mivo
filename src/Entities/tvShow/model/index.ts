import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { show } from "../tvShowAPI";
import type { IShowState, ITV } from "../types";

export const showThunk = createAsyncThunk<Array<ITV>>(
    'getShow',
    async () => {
        const response = await show.getShow();
        return response.data.results
    }
)

const initialState : IShowState = {
    show : [],
}

const showSlice = createSlice({
    name : 'getShow',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(showThunk.fulfilled,(state,action : PayloadAction<Array<ITV>>) =>{
            state.show = action.payload
        })
    }
})

export default showSlice.reducer