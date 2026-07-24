import { useState, type ChangeEvent } from "react";
import { useAppDispatch } from "../../../../App/Hooks";
import { changShowQuery, findShowThunk, cleaningShow } from "../../../../Entities/MediaShow";
import { cleaningData } from "../../../../Entities/mediaGenres";
import { FindFilm } from "../../../../Shared/ui";

function ShowSearchBar() {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState<string>('');

    const handleChangText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getShow = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search.trim()) {
            const params = { query: search, page: 1 };
            dispatch(cleaningData());
            dispatch(cleaningShow());
            dispatch(changShowQuery(search));
            dispatch(findShowThunk(params));
            setSearch('');
        }
    };
    
    return (
        <FindFilm getFilm={getShow} handleChangText={handleChangText} search={search} />
    );
}

export { ShowSearchBar };
