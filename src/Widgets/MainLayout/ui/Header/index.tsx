import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { movieThunk } from '../../../../Entities/Movie/model';
import { infoMovieThunk } from "../../../../Entities/InfoMovie/model";

const nav = ["Movies", "TV Shows", "People", "Awards", "News"];

export default function Header() {

  let dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(infoMovieThunk())
  })

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#0d0d10",
        borderBottom: "1px solid #1a1a1d",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1450,
          width: "100%",
          mx: "auto",
          height: 72,
        }}
      >
        {/* Logo */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              bgcolor: "#f6b10a",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalMoviesIcon
              sx={{
                color: "#111",
                fontSize: 22,
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            Mivo
          </Typography>
        </Box>

        {/* Navigation */}

        <Box
          sx={{
            display: "flex",
            gap: 4,
            ml: 10,
          }}
        >
          {nav.map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#9b9b9b",
                fontWeight: 500,
                cursor: "pointer",
                transition: ".2s",

                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Search */}

        <TextField
          placeholder="Search titles, people..."
          size="small"
          sx={{
            width: 310,

            "& .MuiOutlinedInput-root": {
              bgcolor: "#18181d",
              borderRadius: "10px",
              color: "#fff",

              "& fieldset": {
                border: "none",
              },
            },

            input: {
              color: "#fff",
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#6d6d74" }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <IconButton sx={{ ml: 2, color: "#bdbdbd" }}>
          <NotificationsNoneIcon />
        </IconButton>

        <IconButton sx={{ color: "#bdbdbd" }}>
          <PersonIcon />
        </IconButton>

        <Button
          sx={{
            color: "#d6d6d6",
            textTransform: "none",
            ml: 1,
            fontWeight: 600,
          }}
        >
          Sign in
        </Button>

        <Button
          variant="contained"
          sx={{
            ml: 2,
            bgcolor: "#f6b10a",
            color: "#111",
            textTransform: "none",
            fontWeight: 700,
            px: 3,
            borderRadius: "10px",

            "&:hover": {
              bgcolor: "#e6a307",
            },
          }}
        >
          Join Mivo
        </Button>
      </Toolbar>
    </AppBar>
  );
}