import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks"
import { movieThunk } from "../../../Entities/Movie/model";
import { openScreen } from "../../../Entities/OpenScreen";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { searchTrailer } from "../lib";



function TrailerButton({trailerID} : any){

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
                  variant="outlined"
                  onClick={watchTrailer}
                  size="small"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    color: '#ffc107',
                    borderColor: 'rgba(255, 193, 7, 0.5)',
                    borderRadius: '20px',
                    textTransform: 'none',
                    py: 0.2,
                    px: 1.5,
                    '&:hover': {
                        borderColor: '#ffc107',
                        bgcolor: 'rgba(255, 193, 7, 0.1)'
                    }
                  }}
                >
                  Trailer
                </Button>  
        </>
    )

}

export { TrailerButton }