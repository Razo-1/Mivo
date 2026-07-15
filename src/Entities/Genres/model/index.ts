import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { generAPI } from "../GenresApi";
import type { GenresState } from "../Types";


const geners = createAsyncThunk(
    'getGen',
    async () => {
        const response =  await generAPI.chooseGenres()
        return response.data
    }
)

const initialState : GenresState = {
    geners : []
}

const genreSlice = createSlice({
    name : 'getGen',
    initialState,
    reducers : {

    },
    extraReducers(builder){
        builder.addCase(geners.fulfilled,(state,action) => {
            state.geners = action.payload
        })
    }

})

export default genreSlice.reducer