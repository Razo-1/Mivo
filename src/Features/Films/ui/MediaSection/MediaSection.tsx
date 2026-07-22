import { Container } from '@mui/material';
import type { IFilmsProps } from '../../../../Shared/Types'; 
import { MainCard } from '../MainCard';
import { SectionHeader } from '../SectionHeader';

function MediaSection({ results,text } : IFilmsProps){
    return(
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <SectionHeader text={text}/>
          <MainCard results={results}/>
        </Container>
    )
}

export { MediaSection }