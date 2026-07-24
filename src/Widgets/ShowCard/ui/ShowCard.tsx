import { Box } from '@mui/material';
import { ShowCardBlock } from './ShowCardBlock';
import { ShowPagination } from '../../../Features/ShowGenre/ui';

interface ShowCardProps {
    results: any[];
    find: any[];
    data: any[];
}

function ShowCard({ results, find, data }: ShowCardProps) {
    const listToRender = data && data.length > 0
        ? data
        : find && find.length > 0
            ? find
            : results || [];

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
            <ShowCardBlock results={listToRender} />
            <ShowPagination />
        </Box>
    );
}

export { ShowCard };
