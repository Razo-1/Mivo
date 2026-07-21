import { MovieGenres, TrailerModal } from "../../../../Features/GenreList/ui";
import { FilmCard } from "../../../../Widgets/FilmCard/ui";



function MovieViewPage(){



    return(
        <>
            <MovieGenres/>
            <FilmCard/>
            <TrailerModal/>
        </>
    )
}

export { MovieViewPage }