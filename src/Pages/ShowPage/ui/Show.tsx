import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { ShowGenres } from "../../../Features/ShowGenre/ui";
import { ShowCard } from "../../../Widgets/ShowCard/ui";
import { TrailerModal } from "../../../Features/GenreList/ui";
import { showThunk } from "../../../Entities/tvShow/model";

function Show() {
    const { show } = useAppSelector(state => state.showData);
    const { find } = useAppSelector(state => state.findShowData);
    const { data } = useAppSelector(state => state.mediaGenData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(showThunk(1));
    }, [dispatch]);

    return (
        <>
            <ShowGenres />
            <ShowCard results={show} find={find} data={data} />
            <TrailerModal />
        </>
    );
}

export { Show };