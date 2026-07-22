import { Box } from "@mui/material";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

function ShowCase(){
    return(
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
          <MilitaryTechIcon sx={{ fontSize: "2rem", color: "#ffb300" }} />
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
            Top Rated All Time
          </Box>
        </Box>
    )
}

export { ShowCase }