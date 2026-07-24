import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Card,
  IconButton,
} from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { formatVotes, getYear } from '../../FilmCard/lib';
import { TrailerButton } from '../../../Features/GenreList/ui';

function ShowCardBlock({ results }: { results: any[] }) {
    return (
        <>
        {results.map((item: any, index: number) => (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            bgcolor: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            position: 'relative',
            '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            },
          }}
        >
          <Box
             sx={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 bgcolor: '#1976d2',
                 color: 'white',
                 px: 1.5,
                 py: 0.5,
                 borderBottomRightRadius: 8,
                 borderTopLeftRadius: 8,
                 fontWeight: 'bold',
                 fontSize: '0.8rem',
                 zIndex: 10
             }}
          >
              #{index + 1}
          </Box>

          <Box sx={{
              position: 'relative',
              width: { xs: '100%', sm: 140 },
              minWidth: { sm: 140 },
              flexShrink: 0
          }}>
            <CardMedia
              component="img"
              image={!item.poster_path || item.poster_path === '/placeholder' ? 'https://placehold.co/140x210/222/FFF?text=Poster' : `https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={item.name || item.title || 'TV Show'}
              sx={{
                  height: { xs: 200, sm: '100%' },
                  objectFit: 'cover',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: { xs: 0, sm: 8 },
                  borderTopRightRadius: { xs: 8, sm: 0 },
              }}
            />
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.8)', color: '#ffc107' }
                }}
            >
                <BookmarkAddOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>

          <CardContent sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              p: 2,
              '&:last-child': { pb: 2 }
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                    <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 'bold', lineHeight: 1.2, mb: 0.5 }}>
                      {item.name || item.original_name || item.title || item.original_title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 1.5 }}>
                      {getYear(item.first_air_date || item.release_date)}
                    </Typography>
                </Box>
                <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: 'white' } }}>
                    <InfoOutlinedIcon />
                </IconButton>
            </Box>

            <Typography 
                variant="body2" 
                sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    mt: 0.5,
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: { xs: 3, sm: 2, md: 3 },
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.5
                }}
            >
                {item.overview || "Описание отсутствует."}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mt: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <StarIcon sx={{ color: '#ffc107', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                        {item.vote_average?.toFixed(1) ?? 'N/A'}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        ({formatVotes(item.vote_count ?? 0)})
                    </Typography>
                </Box>

                <TrailerButton trailerID={item.id}/>
            </Box>
          </CardContent>
        </Card>
      ))}
        </>
    );
}

export { ShowCardBlock };
