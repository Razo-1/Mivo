import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { MovieGenres } from "../../../Features/GenreList/ui";
import { FilmCard } from "../../../Widgets/FilmCard/ui";
import { showThunk } from "../../../Entities/tvShow/model";
import { mediaGenThunk } from "../../../Entities/mediaGenres";



function Show(){

    // const { show,total_pages } = useAppSelector(state => state.showData)
    const { data } = useAppSelector(state => state.mediaGenData);

    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(showThunk(1))
        let a = {genId: 80, page: 1}
        dispatch(mediaGenThunk(a))
    },[dispatch])
    
    return(
        <>
            <MovieGenres/>
            {/* <FilmCard results={show}/> */}
        </>
    )
}

export { Show }