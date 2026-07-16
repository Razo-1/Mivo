import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button, Chip, Rating, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import type { RootState } from '../../../App/Store';

function Info(){
  
  const { infoMovie } = useSelector((state: RootState) => state.infoMovieData);
  const [infoWatchlist, setInfoWatchlist] = useState(false);
 
  if (!infoMovie) return null;
 
  const year = new Date(infoMovie.release_date).getFullYear();
  const runtime = `${Math.floor(infoMovie.runtime / 60)}h ${infoMovie.runtime % 60}m`;
  const rating = (infoMovie.vote_average / 2).toFixed(1);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { xs: '20px', sm: '60px', md: '150px' },
        left: { xs: '20px', sm: '40px', md: '60px' },
        right: { xs: '20px', sm: '40px', md: 'auto' },
        maxWidth: { xs: '100%', sm: '90%', md: '600px' },
        zIndex: 5,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Chip 
          label="FEATURED" 
          size="small" 
          sx={{ mb: 2, bgcolor: '#ff9800', color: '#000' }} 
        />
        
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 1,
            fontSize: { xs: '28px', sm: '36px', md: '48px' }
          }}
        >
          {infoMovie.title}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            fontStyle: 'italic', 
            mb: 2, 
            opacity: 0.9,
            fontSize: { xs: '12px', sm: '14px' }
          }}
        >
          "{infoMovie.tagline}"
        </Typography>
        
        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            mb: 2, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating 
              value={parseFloat(rating) / 2} 
              readOnly 
              size="small" 
              sx={{ '& .MuiRating-icon': { color: '#ff9800' } }} 
            />
            <Typography variant="body2">{rating}</Typography>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '12px', sm: '14px' } }}>
            {infoMovie.vote_count > 1000 ? `${(infoMovie.vote_count / 1000).toFixed(0)}K` : infoMovie.vote_count} ratings
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '12px', sm: '14px' } }}>
            {year}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '12px', sm: '14px' } }}>
            {runtime}
          </Typography>
        </Stack>
 
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            mb: 3, 
            flexWrap: 'wrap', 
            gap: 1 
          }}
        >
          {infoMovie.genres?.map((g: any) => (
            <Chip 
              key={g.id} 
              label={g.name} 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: '#fff',
                fontSize: { xs: '11px', sm: '12px' }
              }} 
            />
          ))}
        </Stack>
 
        <Typography 
          variant="body2" 
          sx={{ 
            maxWidth: '100%',
            lineHeight: 1.6, 
            opacity: 0.9,
            fontSize: { xs: '13px', sm: '14px' },
            display: { xs: 'none', sm: 'block' }
          }}
        >
          {infoMovie.overview}
        </Typography>
      </Box>
 
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        sx={{ 
          mt: 3,
          width: '100%'
        }}
      >
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          sx={{ 
            bgcolor: '#ff9800', 
            color: '#000', 
            fontWeight: 600, 
            '&:hover': { bgcolor: '#ffa726' },
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          Watch Trailer
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setInfoWatchlist(!infoWatchlist)}
          sx={{
            borderColor: '#fff',
            color: '#fff',
            bgcolor: infoWatchlist ? 'rgba(255,152,0,0.2)' : 'transparent',
            '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          {infoWatchlist ? 'In Watchlist' : 'Watchlist'}
        </Button>
      </Stack>
    </Box>
  );
}

export { Info }