import { CinematicFade } from "../../../../Shared/ui";
import { Info } from "../../../../Widgets/FilmInfoTable";
import { Movies } from "../../../../Widgets/TrandMovies";
import { TrailerModal } from "../../../../Features/GenreList/ui";
import { MainTrailer } from "../../../../Features/homeList/ui";
import "./style/Trailer.css";

function Trailer() {
  
  return (
    <div>
      <div className="video">
        <div className="video-container">
                  <CinematicFade />
                  <MainTrailer/>
                  <div className="info">
                    <Info />
                  </div>
              </div>
            </div>
            <Movies />
      <TrailerModal/>
    </div>
  );
}

export { Trailer };
