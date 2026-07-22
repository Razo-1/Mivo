import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "../../Entities/Genres"; 
import { infoMovieSlice } from "../../Entities/InfoMovie"; 
import { movieSlice } from "../../Entities/Movie"; 
import { relseSlice } from "../../Entities/NewReleases"; 
import { actorSlice } from "../../Entities/PopularActors";
import { cinemasSlice } from "../../Entities/NowInCinemas"; 
import { watchSlice } from "../../Entities/NowWatching"; 
import { showSlice } from "../../Entities/tvShow";
import { findSlice } from "../../Entities/MovieFinder";
import { genFilmSlice } from "../../Entities/GenreFilms";
import { screenSlice } from "../../Entities/OpenScreen";
import { MainMovieSlice } from "../../Entities/MainMovie";
import { mediaGenSlice } from "../../Entities/mediaGenres";

const store = configureStore({
    reducer : {
        generesData : genreSlice,
        infoMovieData : infoMovieSlice,
        movieData : movieSlice,
        releaseData : relseSlice,
        actorsData : actorSlice,
        cinemasData : cinemasSlice,
        watchData : watchSlice,
        showData : showSlice,
        findData : findSlice,
        genFilmsData : genFilmSlice,
        screenChang : screenSlice,
        mainMovData : MainMovieSlice,
        mediaGenData : mediaGenSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }