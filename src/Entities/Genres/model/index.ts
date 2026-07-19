import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { generAPI } from "../GenresApi";
import type { GenresState, IDat } from "../Types";


export const genersThunk = createAsyncThunk<Array<IDat>>(
    'getGen',
    async () => {
        const response =  await generAPI.chooseGenres()
        return response.data.genres
    }
)

const initialState : GenresState = {
    genres : []
}

const genreSlice = createSlice({
    name : 'getGen',
    initialState,
    reducers : {

    },
    extraReducers(builder){
        builder.addCase(genersThunk.fulfilled,(state,action) => {
            state.genres = action.payload 
        })
    }

})

export default genreSlice.reducer