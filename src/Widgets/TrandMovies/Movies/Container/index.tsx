import { Box, Container } from "@mui/material";
import { Genres } from "../../../../Features/genres";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../App/Store";
import { useEffect } from "react";
import { relseThunk } from "../../../../Entities/NewReleases/model";
import { Watch } from "../../../../Entities/NowWatching/ui/Watch/Watch";


function Connection(){

    let dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(relseThunk())
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
          <Watch />
        </Box>

        <Box sx={{ flex: 1, maxWidth: { md: '440px' }, width: '100%' }}>
          <Genres />
        </Box>
      </Box>
    </Container>
  );
}

export { Connection }