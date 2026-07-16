import { useEffect } from "react";
import { NewMovies } from "../../../Entities/NewReleases";
import './Style/Movies.css';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../App/Store";
import { relseThunk } from "../../../Entities/NewReleases/model";

function Movies(){
    
    let dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(relseThunk())
    },[dispatch])

    return(
        <div className="new-movies">
            <div className="news-movie">
                <NewMovies/>
            </div>
        </div>
    )
}

export { Movies }