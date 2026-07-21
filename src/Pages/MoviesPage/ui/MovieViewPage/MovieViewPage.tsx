import { MovieGenres, TrailerModal } from "../../../../Features/GenreList/ui";
import { FilmCard } from "../../../../Widgets/FilmCard/ui";
import { useAppDispatch, useAppSelector } from '../../../../App/Hooks'
import { useEffect } from 'react';
import { relseThunk } from '../../../../Entities/NewReleases/model'


function MovieViewPage(){

    const { results } = useAppSelector(state => state.releaseData);
    const { find } = useAppSelector(state => state.findData);
    const { data } = useAppSelector(state => state.genFilmsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(relseThunk(1))
    },[dispatch])    
    

    return(
        <>
            <MovieGenres/>
            <FilmCard results={results} find={find} data={data}/>
            <TrailerModal/>
        </>
    )
}

export { MovieViewPage }