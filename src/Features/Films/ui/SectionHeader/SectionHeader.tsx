import { Box, Link, Typography } from "@mui/material";
import MovingIcon from '@mui/icons-material/Moving';
import type { ISectionHeaderText } from "../../../../Shared/Types"; 


function SectionHeader({ text } : ISectionHeaderText){
    return(
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff", fontWeight: 700, letterSpacing: "0.5px" }}>
                <MovingIcon sx={{ color: "#ffb300", fontSize: 30 }} />
                {text}
            </Typography>
            <Link href="#" sx={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem' }}>
                See all →
            </Link>
      </Box>
    )
}

export { SectionHeader }
