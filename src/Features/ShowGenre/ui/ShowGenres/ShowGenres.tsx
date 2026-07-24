import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../App/Hooks';
import { Box, Typography, Chip, ButtonGroup, Button } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { tvGenresThunk } from '../../../../Entities/TvGenres';
import { mediaGenThunk, cleaningData } from '../../../../Entities/mediaGenres';
import { cleaningShow } from '../../../../Entities/MediaShow';
import { ShowSearchBar } from '../ShowSearchBar/ShowSearchBar';

function ShowGenres() {
  const [activeGenre, setActiveGenre] = useState<number | null>(null);
  const { genres } = useAppSelector(state => state.tvGenresData);
  const { genId } = useAppSelector(state => state.mediaGenData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tvGenresThunk());
  }, [dispatch]);

  const handleChange = (id: number) => {
    setActiveGenre(id);
    const params = { genId: id, page: 1 };
    dispatch(mediaGenThunk(params));
  };

  const handleAll = () => {
    setActiveGenre(null);
    dispatch(cleaningData());
    dispatch(cleaningShow());
  };

  useEffect(() => {
    if (genId === null) {
      setActiveGenre(null);
    } else {
      setActiveGenre(genId);
    }
  }, [genId]);

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto', mb: 3, mt: 3 }}>
      {/* Top row: Header & controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>All TV Shows</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>Popular Series</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <ButtonGroup size="small" sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}>
            <Button sx={{ color: '#ffc107', borderColor: 'transparent' }}><ViewListIcon fontSize="small" /></Button>
            <Button sx={{ color: 'rgba(255,255,255,0.3)', borderColor: 'transparent' }}><GridViewIcon fontSize="small" /></Button>
          </ButtonGroup>
          
          <Button size="small" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', textTransform: 'none', px: 2 }}>
            Popularity
          </Button>
        </Box>
      </Box>

      {/* Genres */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
        <Chip
          label="All"
          onClick={handleAll}
          sx={{
            cursor: 'pointer',
            bgcolor: activeGenre === null ? '#ffc107' : 'rgba(255,255,255,0.05)',
            color: activeGenre === null ? '#000' : '#fff',
            '&:hover': {
              bgcolor: activeGenre === null ? '#ffb300' : 'rgba(255,255,255,0.1)'
            }
          }}
        />

        {genres.map((genre: any) => (
          <Chip 
            key={genre.id}
            label={genre.name}
            onClick={() => handleChange(genre.id)}
            sx={{ 
              cursor: 'pointer',
              bgcolor: genre.id === activeGenre ? '#ffc107' : 'rgba(255,255,255,0.05)',
              color: genre.id === activeGenre ? '#000' : '#fff',
              '&:hover': { 
                bgcolor: genre.id === activeGenre ? '#ffb300' : 'rgba(255,255,255,0.1)' 
              }
            }}
          />
        ))}
      </Box>

      {/* Search */}
      <ShowSearchBar />
    </Box>
  );
}

export { ShowGenres };
