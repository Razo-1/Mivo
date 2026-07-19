import { useEffect } from "react";
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { genersThunk } from "../../../Entities/Genres/model";
import { getGenreColor } from "../lib/getGenreColor";
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';


function Genres(){

    const  { genres } = useAppSelector(state => state.generesData);
    const dispatch = useAppDispatch();
    
    
    useEffect(() => {
        dispatch(genersThunk())
    },[dispatch])

    return (
    <Box sx={{ backgroundColor: '#0b0c10', py: 4 }}>
      <Box sx={{ maxWidth: 1450, mx: "auto", px: 2 }}>
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
          <TheatersOutlinedIcon sx={{ fontSize: "2rem", color: "#ffb300" }} />
          <Box 
            sx={{ 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              letterSpacing: 0.5,
              fontFamily: '"Georgia", serif',
              background: 'white',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Browse by Genre
          </Box>
        </Box>
  
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {genres?.map((genre) => {
            const { borderColor, bgColor, textColor } = getGenreColor(genre.id);
            
            return (
              <Button
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
      </Box>
    </Box>
  );

}

export { Genres }