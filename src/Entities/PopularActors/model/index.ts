import { createSlice,createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { actor } from "../actorAPI";
import type { IActorState, IPerson } from "../types";


export const actorThunk = createAsyncThunk<Array<IPerson>>(
    'getActors',
    async () => {
        const response = await actor.getActor()
        return response.data.results
    }
)

const initialState : IActorState = {
    actors : []
}

const actorSlice = createSlice({
    name : 'getActors',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(actorThunk.fulfilled,(state,action : PayloadAction<Array<IPerson>>) => {
            state.actors = action.payload
        })
    }
})

export default actorSlice.reducer