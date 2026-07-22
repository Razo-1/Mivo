import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { ModelButton } from "../ModelButton";
import type { IMainCard } from "../../../../Shared/Types"; 


function MainCard({ results } : IMainCard){

    return (
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
            {results?.map((item) => (
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
                <Box
                sx={{
                    position: "relative",
                    "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,.45)",
                    opacity: 0,
                    transition: ".3s",
                    },
                    "&:hover::after": {
                    opacity: 1,
                    },
                    "&:hover .trailer-btn": {
                    opacity: 1,
                    visibility: "visible",
                    },
                }}
                >
                <CardMedia component="img" height="260" image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />

                <ModelButton trailerID={item.id}/>
            </Box>
 
            <CardContent sx={{ pt: 2, pb: 2, px: 1 }}>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: '600', mb: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.title || item.name}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {item.release_date?.split("-")[0] || item.first_air_date?.split("-")[0]}
                </Typography>

              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    )
}

export { MainCard }