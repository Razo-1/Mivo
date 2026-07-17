import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../../App/Store"
import { cinamntThunk } from "../../model";
import { Films } from "../../../../Shared/ui/Films/Films";


function InCinemas(){
    
    const { item } = useSelector((state : RootState) => state.cinemasData);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(cinamntThunk());
    },[dispatch])

    let release = item    
    
    return(
        <>
            <Films release={release} text={'In Cinemas'}/>
        </>
    )
}

export { InCinemas }