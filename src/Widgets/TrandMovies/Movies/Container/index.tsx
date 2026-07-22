import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Container } from "@mui/material";
import { Genres } from "../../../../Features/genres";
import { relseThunk } from "../../../../Entities/NewReleases";
import { MovieList } from "../../../../Entities/NowWatching";
import type { AppDispatch } from "../../../../App/Store";



function Connection(){

    let dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(relseThunk(1))
    },[dispatch])

     return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 6, md: 10 } 
        }}
      >
        <Box sx={{ flex: 1.7 }}>
          <MovieList />
        </Box>

        <Box sx={{ flex: 1, maxWidth: { md: '440px' }, width: '100%' }}>
          <Genres />
        </Box>
      </Box>
    </Container>
  );
}

export { Connection }