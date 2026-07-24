import { useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";
import { FindFilm } from "../../../../Shared/ui";
import { findShowThunk } from "../../../../Entities/MediaShow";




function FindShow(){
    const dispatch = useAppDispatch();
        let [search,setSearch] = useState<string>('');
    
        let handleChangText = (e : ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
        }
    console.log(search);
    
        let getFilm = (e : ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(search.trim()){
                let parms = {query : search , page : 1}
                dispatch(findShowThunk(parms))
                setSearch('')
            }
        }
        
           

    return (
        <>
            <FindFilm/>
        </>
    )
}

export { FindShow }