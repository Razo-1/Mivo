import { Box } from '@mui/material';
import { GenreTitles } from '../GenreTitles';
import { GenreData } from '../GenreData';

function Genres(){

    
    return (
    <Box sx={{ backgroundColor: '#0b0c10', py: 4 }}>
      <GenreTitles/>
      <GenreData/>
    </Box>
  );

}

export { Genres }