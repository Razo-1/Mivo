import { useEffect } from "react";
import { NewMovies } from "../../../Entities/NewReleases";
import './Style/Movies.css';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../App/Store";
import { relseThunk } from "../../../Entities/NewReleases/model";
import { Actors } from "../../../Entities/PopularActors";
import { InCinemas } from "../../../Entities/NowInCinemas/ui/InCinemas/InCinemas";
import { Watch } from "../../../Entities/NowWatching/ui/Watch/Watch";

function Movies(){
    
    let dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(relseThunk())
    },[dispatch])

    return(
        <div className="new-movies">
            <div className="news-movie">
                <NewMovies/>
                <Actors/>
                <InCinemas/>
                <Watch/>
            </div>
        </div>
    )
}

export { Movies }