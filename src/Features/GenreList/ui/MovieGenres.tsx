import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../App/Hooks';
import { Box, Typography, Chip,ButtonGroup, Button } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { SearchBar } from './SearchBar';
import { genersThunk } from '../../../Entities/Genres'; 
import { cleaning } from '../../../Entities/MovieFinder'; 
import { genFilmThunk,cleaningData } from '../../../Entities/GenreFilms'; 



function MovieGenres(){

    const [activeGenre, setActiveGenre] = useState<number | null>(null);
    const { genres } = useAppSelector(state => state.generesData);
    const { genreId } = useAppSelector(state => state.genFilmsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genersThunk())
    },[dispatch])
    
    let handleChang = (id : number) => {
      setActiveGenre(id)
      
      let parms = { genreId: id,page: 1 }
      dispatch(genFilmThunk(parms))
    }
    
    let handleAll = () => {
      dispatch(cleaningData())
      dispatch(cleaning())
    }
    useEffect(() => {
      if(!genreId){
        setActiveGenre(null)
      }
    },[genreId])

    return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto', mb: 3, mt : 3}}>
      {/* Верхняя строка: Заголовок и переключатели */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>1
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>All Movies</Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>16 titles</Typography>
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


      

      {/* Жанры */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
        <Chip
        label="All"
        onClick={handleAll}
        sx={{
          cursor: 'pointer',
          bgcolor: activeGenre === null
            ? '#ffc107'
            : 'rgba(255,255,255,0.05)',

          color: activeGenre === null
            ? '#000'
            : '#fff',

          '&:hover': {
            bgcolor: activeGenre === null
              ? '#ffb300'
              : 'rgba(255,255,255,0.1)'
          }
        }}
      />

        {genres.map((genre : any) => (
          <Chip 
            key={genre.id}
            label={genre.name}
            onClick={() => handleChang(genre.id)}
            sx={{ 
              cursor: 'pointer',
              bgcolor: genre.id === activeGenre 
                ? '#ffc107' 
                : 'rgba(255,255,255,0.05)',
              color: genre.id === activeGenre 
                ? '#000' 
                : '#fff',

              '&:hover': { 
                bgcolor: genre.id === activeGenre 
                  ? '#ffb300' 
                  : 'rgba(255,255,255,0.1)' 
              }
            }}
          />
        ))}
      </Box>

      {/* Поиск */}
        <SearchBar/>
    </Box>
  );
}

export { MovieGenres }