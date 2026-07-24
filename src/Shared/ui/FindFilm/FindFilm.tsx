import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


function FindFilm({ getFilm,handleChangText,search } : any){


    return (
        <>
            <Box component="form" onSubmit={getFilm}>
                <TextField
                    fullWidth
                    onChange={handleChangText}
                    value={search}
                    placeholder="Filter by title or director..."
                    slotProps={{
                    input: {
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'rgba(255,255,255,0.3)' }} />
                        </InputAdornment>
                        ),
                    }
                    }}
                    sx={{
                    '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.05)',
                        borderRadius: 2,
                        color: '#fff',
                        '& fieldset': { border: 'none' }
                    }
                    }}
                />
            </Box>
        </>
    )
}

export { FindFilm }