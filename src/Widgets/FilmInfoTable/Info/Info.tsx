import { Container, Box, Typography, Button, Chip, Rating, Stack } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import type { RootState } from '../../../App/Store';


function Info(){

  const { infoMovie } = useSelector(
    (state: RootState) => state.infoMovieData
  );

  const [infoWatchlist, setInfoWatchlist] = useState(false);

  if (!infoMovie) return null;


  const year = new Date(infoMovie.release_date).getFullYear();
  const runtime = `${Math.floor(infoMovie.runtime / 60)}h ${infoMovie.runtime % 60}m`;
  const rating = (infoMovie.vote_average / 2).toFixed(1);


  return (
    <Box
      sx={{
        // position: 'absolute',
        // bottom: {
        //   xs: 20,
        //   sm: 50,
        //   md: 100
        // },
        // left: 0,
        // right: 0,
        // top : '100px',
        // zIndex: 5,
        margin : '0 auto'
      }}
    >

      <Container maxWidth="lg">

        <Box
          sx={{
            maxWidth: 600,
          }}
        >

          <Chip
            label="FEATURED"
            size="small"
            sx={{
              mb: 2,
              bgcolor:'#ff9800',
              color:'#000'
            }}
          />


          <Typography
            variant="h3"
            sx={{
              color:'#fff',
              fontWeight:700,
              mb:1,
              fontSize:{
                xs:'28px',
                sm:'36px',
                md:'48px'
              }
            }}
          >
            {infoMovie.title}
          </Typography>


          <Typography
            sx={{
              color:'#fff',
              fontStyle:'italic',
              opacity:.9,
              mb:2
            }}
          >
            "{infoMovie.tagline}"
          </Typography>


          <Stack
            direction="row"
            spacing={2}
            sx={{
              mb:2,
              flexWrap:'wrap'
            }}
          >

            <Box sx={{display:'flex',alignItems:'center'}}>
              <Rating
                value={Number(rating)}
                readOnly
                size="small"
              />

              <Typography sx={{color:'#fff',ml:1}}>
                {rating}
              </Typography>
            </Box>


            <Typography sx={{color:'#fff',opacity:.8}}>
              {year}
            </Typography>


            <Typography sx={{color:'#fff',opacity:.8}}>
              {runtime}
            </Typography>

          </Stack>


          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb:3,
              flexWrap:'wrap'
            }}
          >

            {infoMovie.genres?.map((g:any)=>(
              <Chip
                key={g.id}
                label={g.name}
                size="small"
                sx={{
                  bgcolor:'rgba(255,255,255,.2)',
                  color:'#fff'
                }}
              />
            ))}

          </Stack>


          <Typography
            sx={{
              color:'#fff',
              opacity:.9,
              lineHeight:1.6,
              mb:3,
              display:{
                xs:'none',
                sm:'block'
              }
            }}
          >
            {infoMovie.overview}
          </Typography>



          <Stack
            direction={{
              xs:'column',
              sm:'row'
            }}
            spacing={2}
          >

            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              sx={{
                bgcolor:'#ff9800',
                color:'#000',
                fontWeight:600
              }}
            >
              Watch Trailer
            </Button>


            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={()=>setInfoWatchlist(!infoWatchlist)}
              sx={{
                color:'#fff',
                borderColor:'#fff'
              }}
            >
              {infoWatchlist ? 'In Watchlist' : 'Watchlist'}
            </Button>


          </Stack>


        </Box>

      </Container>

    </Box>
  );
}

export { Info };