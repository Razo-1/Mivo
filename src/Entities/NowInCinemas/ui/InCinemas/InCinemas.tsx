import { useEffect } from "react"
import { cinamntThunk } from "../../model";
import { MediaSection } from '../../../../Features/Films'; 
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";


function InCinemas(){
    
    const { results } = useAppSelector(state => state.cinemasData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(cinamntThunk());
    },[dispatch])
    
    return(
        <>
            <MediaSection results={results} text={'In Cinemas'}/>
        </>
    )
}

export { InCinemas }