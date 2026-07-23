import { Box } from "@mui/material";
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';


function GenreTitles(){
    return(
        <Box sx={{ maxWidth: 1450, mx: "auto", px: 2 }}>
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
          <TheatersOutlinedIcon sx={{ fontSize: "2rem", color: "#ffb300" }} />
          <Box 
            sx={{ 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              letterSpacing: 0.5,
              fontFamily: '"Georgia", serif',
              background: 'white',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Browse by Genre
          </Box>
        </Box>
  
        
      </Box>
    )
}

export { GenreTitles }