import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { getGenreColor } from "../../lib/getGenreColor";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";
import { useEffect } from "react";
import { genersThunk } from "../../../../Entities/Genres";
import { genFilmThunk } from "../../../../Entities/GenreFilms";



function GenreData(){

    const  { genres } = useAppSelector(state => state.generesData);
    const dispatch = useAppDispatch();
    
    
    useEffect(() => {
        dispatch(genersThunk())
    },[dispatch])

    let choseMovie = (id : number) => {
      dispatch(genFilmThunk({ genreId : id,page : 1 }))         
    }



    return(
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {genres?.map((genre) => {
            const { borderColor, bgColor, textColor } = getGenreColor(genre.id);
            
            return (
              <Button
                component={NavLink}
                to={'/Movies'}
                onClick={() => choseMovie(genre.id)}
                key={genre.id}
                variant="outlined"
                sx={{
                  borderColor: borderColor,
                  backgroundColor: bgColor,
                  color: textColor,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  px: 3,
                  py: 0.8,
                  borderWidth: "1px",
                  borderRadius: "8px",
                  flex: "0 0 auto",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderWidth: "1px",
                    borderColor: borderColor,
                    backgroundColor: bgColor,
                    filter: 'brightness(1.2)',
                  },
                }}
              >
                {genre.name}
              </Button>
            );
          })}
        </Box>
    )
}

export { GenreData }