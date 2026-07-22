import { Typography } from "@mui/material";


function RankingList(){
    return(
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.61)', fontWeight: 400, fontSize: '0.75rem', mt: 3, cursor: 'pointer', px: 2 }}>
            Full rankings &gt;
        </Typography>
    )
}

export { RankingList }