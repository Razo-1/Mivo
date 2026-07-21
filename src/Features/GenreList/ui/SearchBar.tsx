import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, type ChangeEvent } from "react";
import { useAppDispatch } from "../../../App/Hooks";
import { changQuery, findThunk } from "../../../Entities/MovieFinder";
import { cleaningData } from "../../../Entities/GenreFilms/model";
import { cleaning } from "../../../Entities/MovieFinder/model";


function SearchBar(){

    let [search,setSearch] = useState<string>('');
    const dispatch = useAppDispatch();

    let handleChangText = (e : ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
    }


    let getFilm = (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(search.trim()){
            let parms = {query : search , page : 1}
            dispatch(cleaningData())
            dispatch(cleaning())
            dispatch(changQuery(search))
            dispatch(findThunk(parms))
            setSearch('')
        }
    }
    
    return(
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

export { SearchBar }