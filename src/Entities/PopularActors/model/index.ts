import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { actor } from "../actorAPI";


export const actorThunk = createAsyncThunk(
    'getActors',
    async () => {
        const response = await actor.getActor()
        return response.data.results
    }
)

const initialState : any = {
    actors : []
}

const actorSlice = createSlice({
    name : 'getActors',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(actorThunk.fulfilled,(state,action) => {
            state.actors = action.payload
        })
    }
})

export default actorSlice.reducer