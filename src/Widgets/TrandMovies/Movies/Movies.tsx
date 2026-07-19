import { NewMovies } from "../../../Entities/NewReleases";
import { Actors } from "../../../Entities/PopularActors";
import { InCinemas } from "../../../Entities/NowInCinemas/ui/InCinemas/InCinemas";
import { Connection } from "./Container";
import './Style/Movies.css';
import { Show } from "../../../Entities/tvShow";

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