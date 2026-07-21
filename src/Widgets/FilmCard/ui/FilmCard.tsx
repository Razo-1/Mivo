import {Box} from '@mui/material';
import { CardBlock } from './CardBlock';
import { PaginationSnippet } from '../../../Features/GenreList/ui';


function FilmCard({ results,find,data} : any){
      
    return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 800,
        margin: '0 auto',
        p: 2,
        bgcolor: '#121212',
        minHeight: '100vh'
    }}>
        {data.length ? <CardBlock results={data}/> : find.length ? <CardBlock results={find}/> : <CardBlock results={results}/>}
        <PaginationSnippet/>
    </Box>
  );
}

export { FilmCard }