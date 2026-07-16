import { useEffect } from "react";
import type { AppDispatch, RootState } from "../../../../App/Store";
import { useDispatch, useSelector } from "react-redux";
import { movieThunk } from "../../../../Entities/Movie/model";
import { CinematicFade } from "../../../../Shared/ui/cinematic-fade";
import "./style/Trailer.css";
import { Info } from "../../../../Widgets/FilmInfoTable";
import { Movies } from "../../../../Widgets/TrandMovies";

function Trailer() {

  const { results } = useSelector((state: RootState) => state.movieData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(movieThunk());
  }, [dispatch]);

  const videoKey = results[0]?.key;  
  
  return (
    <div>
      <div className="video">
        <div className="video-container">
          <CinematicFade />
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&cc_load_policy=0`}
            title="Trailer"
            allow="autoplay"
            frameBorder="0"
          />
          <Info />
        </div>
      </div>
      <Movies />
    </div>
  );
}

export { Trailer };
