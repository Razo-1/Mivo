import { useDispatch, useSelector } from "react-redux";
import { watchThunk } from "../../model";
import { Box, Typography } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import type { AppDispatch, RootState } from "../../../../App/Store";
import { useEffect } from "react";

function Watch(){

    const { item } = useSelector((state : RootState) => state.watchData);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(watchThunk())
    },[dispatch])

    return (
    <Box sx={{ maxWidth: 1450, mx: 'auto', px: 2, py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
            <MilitaryTechIcon sx={{color: '#ffb300', fontSize : '25px'}}/> Top Rated All Time
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {item.slice(0,10).map((movie, idx) => (
          <Box 
            key={movie.id} 
            sx={{ 
              display: 'flex', 
              gap: 3, 
              py: 2,
              px: 2,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              alignItems: 'center',
              transition: 'background 0.3s',             
              '&:hover .movie-title': { color: '#ffb300' }
            }}
          >
            <Typography 
              sx={{ 
                color: '#ffb300', 
                fontWeight: 700, 
                fontSize: '1rem',
                minWidth: 30
              }}
            >
              {idx + 1}
            </Typography>

            <Box sx={{ flex: 1 }}>
              <Typography className="movie-title" sx={{ color: 'white', fontWeight: 600, fontSize: '0.75rem', mb: 0.3, transition: 'color 0.3s' }}>
                {movie.title}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.70rem' }}>
                {movie.release_date?.split('-')[0]} · {movie.original_language.toUpperCase()}
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'right', minWidth: 80 }}>
              <Typography sx={{ color: '#FFD700', fontWeight: 600, fontSize: '0.9rem', mb: 0.2 }}>
                ⭐ {movie.vote_average}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                {Math.round(movie.vote_count / 1000)}k
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography sx={{ color: 'rgba(255, 255, 255, 0.61)', fontWeight: 400, fontSize: '0.75rem', mt: 3, cursor: 'pointer', px: 2 }}>
        Full rankings &gt;
      </Typography>
    </Box>
  );
    
}

export { Watch }