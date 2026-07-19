import { useEffect } from "react";
import { movieThunk } from "../../../../Entities/Movie/model";
import { CinematicFade } from "../../../../Shared/ui/cinematic-fade";
import "./style/Trailer.css";
import { Info } from "../../../../Widgets/FilmInfoTable";
import { Movies } from "../../../../Widgets/TrandMovies";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";

function Trailer() {

  const { results } = useAppSelector(state => state.movieData)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(movieThunk());
  }, [dispatch]);

  const videoKey = results[0]?.key;  
  console.log(videoKey);
  
  return (
    <div>
      <div className="video">
        <div className="video-container">
  <CinematicFade />
  <iframe
  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoKey}&fs=0&rel=0&iv_load_policy=3`}
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
