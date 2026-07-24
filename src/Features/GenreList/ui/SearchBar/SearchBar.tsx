import { useState, type ChangeEvent } from "react";
import { useAppDispatch } from "../../../../App/Hooks";
import { changQuery, findThunk } from "../../../../Entities/MovieFinder";
import { cleaningData } from "../../../../Entities/GenreFilms";
import { cleaning } from "../../../../Entities/MovieFinder";
import { FindFilm } from "../../../../Shared/ui";


function SearchBar(){

    const dispatch = useAppDispatch();
    let [search,setSearch] = useState<string>('');

    let handleChangText = (e : ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
    }

    let getFilm = (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(search.trim()){
            let parms = {query : search , page : 1}
            dispatch(cleaningData())
            dispatch(cleaning())
            dispatch(changQuery(search))
            dispatch(findThunk(parms))
            setSearch('')
        }
    }
    
    return(
        <>
            <FindFilm getFilm={getFilm} handleChangText={handleChangText} search={search}/>
        </>
    )
}

export { SearchBar }