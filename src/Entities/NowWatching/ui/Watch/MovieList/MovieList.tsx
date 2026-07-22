import { Box } from '@mui/material';
import { ShowCase } from '../Showcase';
import { TopList } from '../TopList';
import { RankingList } from '../RankingList';
 

function MovieList(){
    
    return (
    <Box sx={{ maxWidth: 1450, mx: 'auto', px: 2, py: 4 }}>
      <ShowCase/>
      <TopList/>
      <RankingList/>
    </Box>
  );
    
}

export { MovieList }