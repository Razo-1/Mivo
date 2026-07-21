import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks"
import { movieThunk } from "../../../Entities/Movie/model";
import { openScreen } from "../../../Entities/OpenScreen";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { searchTrailer } from "../lib"; 



function ModelButton({trailerID} : any){

    const dispatch = useAppDispatch();

    let watchTrailer = async () => {
  try {
    const data = await dispatch(movieThunk(trailerID)).unwrap();

    const key = searchTrailer(data.results);

    if(key){
      dispatch(openScreen(key));
    }

  } catch(error) {
    console.log(error);
  }
}


return(
    <>
            <Button
                className="trailer-btn"
                onClick={watchTrailer}
                variant="contained"
                startIcon={<PlayArrowIcon />}
                sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "30px",
                bgcolor: "#ffc107",
                color: "#000",
                opacity: 0,
                visibility: "hidden",
                transition: ".3s",
                zIndex: 2,
                "&:hover": {
                    bgcolor: "#ffb300",
                },
                }}
                >
                Trailer
            </Button>
        </>
    )

}

export { ModelButton }