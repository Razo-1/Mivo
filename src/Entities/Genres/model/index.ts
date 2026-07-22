import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { generAPI } from "../GenresApi";
import type { GenresState } from "../../../Shared/Types"; 
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IGenre } from "../../../Shared/Types";

export const genersThunk = createAsyncThunk<Array<IGenre>>(
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
        builder.addCase(genersThunk.fulfilled,(state,action : PayloadAction<Array<IGenre>>) => {
            state.genres = action.payload 
        })
    }

})

export default genreSlice.reducer