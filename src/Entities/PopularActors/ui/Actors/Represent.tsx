import { Box, Typography } from "@mui/material";


function Represent(){
    return(
        <>
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 4,
                }}
            >
                <Box
                sx={{
                    width: 5,
                    height: 40,
                    backgroundColor: "#FFD700",
                }}
                />

                <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    color: "white",
                }}
                >
                Trending people &gt;
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography
                variant="overline"
                sx={{
                    color: "#FFD700",
                    fontWeight: 700,
                    letterSpacing: 1,
                }}
                >
                TOP RISING
                </Typography>
                
            </Box>
        </>
    )
}

export { Represent }