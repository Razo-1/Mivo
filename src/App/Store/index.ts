import { configureStore } from "@reduxjs/toolkit";
import genreSlice from '../../Entities/Genres/model';
import infoMovieSlice from '../../Entities/InfoMovie/model';
import movieSlice from '../../Entities/Movie/model';
import relseSlice from '../../Entities/NewReleases/model';
import actorSlice from '../../Entities/PopularActors/model';
import cinemasSlice from '../../Entities/NowInCinemas/model';
import watchSlice from '../../Entities/NowWatching/model';

const store = configureStore({
    reducer : {
        generesData : genreSlice,
        infoMovieData : infoMovieSlice,
        movieData : movieSlice,
        releaseData : relseSlice,
        actorsData : actorSlice,
        cinemasData : cinemasSlice,
        watchData : watchSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }