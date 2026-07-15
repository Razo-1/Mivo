import { configureStore } from "@reduxjs/toolkit";
import genreSlice from '../../Entities/Genres/model';
import infoMovieSlice from '../../Entities/InfoMovie/model';
import movieSlice from '../../Entities/Movie/model';

const store = configureStore({
    reducer : {
        generesData : genreSlice,
        infoMovieData : infoMovieSlice,
        movieData : movieSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }