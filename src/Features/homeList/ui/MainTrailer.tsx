import { useEffect, useState } from "react";
import { MainMovieThunk } from "../../../Entities/MainMovie";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { searchTrailer } from "../lib";




function MainTrailer(){

    
  const { results } = useAppSelector(state => state.mainMovData)
  const dispatch = useAppDispatch();

  const [videoKey,setVideoKey] = useState<string | undefined>()

    useEffect(() => {
    dispatch(MainMovieThunk(1280738));
    }, [dispatch]);

    useEffect(() => {
        if(results.length){
            setVideoKey(searchTrailer(results));
        }
    }, [results])

    if(!videoKey) return null

    console.log(videoKey);
    
    return(
        <>
            <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoKey}&fs=0&rel=0&iv_load_policy=3`}
            title="Trailer"
            allow="autoplay"
            frameBorder="0"
            />
        </>
    )
}

export { MainTrailer }