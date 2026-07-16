import { useSelector } from 'react-redux';
import { Box, Card, CardMedia, CardContent, Typography, Button, Stack, Link, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MovingIcon from '@mui/icons-material/Moving';
import type { RootState } from '../../../../App/Store';

function NewMovies({  }){
    
    const { release } = useSelector((state: RootState) => state.releaseData);
    
    return(
        <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff", fontWeight: 700, letterSpacing: "0.5px" }}>
  <MovingIcon sx={{ color: "#ffb300", fontSize: 30 }} />
  Trending Now
</Typography>
        <Link href="#" sx={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem' }}>
          See all →
        </Link>
      </Box>
 
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': { height: '6px' },
          '&::-webkit-scrollbar-track': { background: 'rgba(255, 255, 255, 0.1)' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(255, 255, 255, 0.3)', borderRadius: '3px' },
        }}
      >
        {release?.map((item : any) => ( /// type poxel heto
          <Card
            key={item.id}
            sx={{
              minWidth: 180,
              maxWidth: 180,
              borderRadius: 2,
              position: 'relative',
              bgcolor: '#1a1a1a',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)' },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" height="260" image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
              <Box sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'rgba(0, 0, 0, 0.7)', color: '#ffc107', padding: '4px 10px', borderRadius: 1, fontSize: '0.875rem', fontWeight: 'bold' }}>
                {item.vote_average.toFixed(1)}
              </Box>
              {item.hasTrailer && (
                <Button
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: '#ffc107',
                    color: '#000',
                    borderRadius: '50%',
                    minWidth: '48px',
                    minHeight: '48px',
                    padding: 0,
                    '&:hover': { bgcolor: '#ffb300' },
                  }}
                  startIcon={<PlayArrowIcon />}
                >
                  Trailer
                </Button>
              )}
            </Box>
 
            <CardContent sx={{ pt: 2, pb: 2, px: 1 }}>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: '600', mb: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.title}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {item.release_date.split("-")[0]}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  · {item.genre}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  
    )
}

export { NewMovies }