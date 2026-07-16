import { configureStore } from "@reduxjs/toolkit";
import genreSlice from '../../Entities/Genres/model';
import infoMovieSlice from '../../Entities/InfoMovie/model';
import movieSlice from '../../Entities/Movie/model';
import relseSlice from '../../Entities/NewReleases/model'

const store = configureStore({
    reducer : {
        generesData : genreSlice,
        infoMovieData : infoMovieSlice,
        movieData : movieSlice,
        releaseData : relseSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }