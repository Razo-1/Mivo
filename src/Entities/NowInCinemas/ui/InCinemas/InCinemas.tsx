import { useEffect } from "react"
import { cinamntThunk } from "../../model";
import { Films } from "../../../../Shared/ui/Films/Films";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";


function InCinemas(){
    
    const { results } = useAppSelector(state => state.cinemasData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(cinamntThunk());
    },[dispatch])

    let release = results    
    
    return(
        <>
            <Films release={release} text={'In Cinemas'}/>
        </>
    )
}

export { InCinemas }