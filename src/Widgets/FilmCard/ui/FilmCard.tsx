import {Box} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../App/Hooks';
import { useEffect } from 'react';
import { relseThunk } from '../../../Entities/NewReleases/model';
import { CardBlock } from './CardBlock';
import { PaginationSnippet } from '../../../Features/GenreList/ui';


function FilmCard(){

    const { results } = useAppSelector(state => state.releaseData);
    const { find } = useAppSelector(state => state.findData);
    const { data } = useAppSelector(state => state.genFilmsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(relseThunk(1))
    },[dispatch])    
    
      
    return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 800,
        margin: '0 auto',
        p: 2,
        bgcolor: '#121212', // Background to contrast with cards
        minHeight: '100vh'
    }}>
        {data.length ? <CardBlock results={data}/> : find.length ? <CardBlock results={find}/> : <CardBlock results={results}/>}
        <PaginationSnippet/>
    </Box>
  );
}

export { FilmCard }