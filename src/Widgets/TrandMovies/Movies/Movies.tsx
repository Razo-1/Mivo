import { NewMovies } from "../../../Entities/NewReleases";
import { Actors } from "../../../Entities/PopularActors";
import { InCinemas } from "../../../Entities/NowInCinemas";
import { Connection } from "./Container";
import { Show } from "../../../Entities/tvShow";
import './Style/Movies.css';

function Movies(){
    
    return(
        <div className="new-movies">
            <div className="news-movie">
                <NewMovies/>
                <Actors/>
                <InCinemas/>
                <Connection/>
                <Show/>
            </div>
        </div>
    )
}

export { Movies }