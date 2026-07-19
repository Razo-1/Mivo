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
import { NavLink } from "react-router-dom";

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
      px: { xs: 2, md: 3 },
    }}
  >
    {/* Logo */}

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: { xs: 32, sm: 36 },
          height: { xs: 32, sm: 36 },
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
            fontSize: { xs: 20, sm: 22 },
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: 22, sm: 30 },
        }}
      >
        Mivo
      </Typography>
    </Box>


    {/* Navigation */}

    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        gap: 4,
        ml: 10,
      }}
    >
      {nav.map((item) => (
        <Typography
          key={item}
          component={NavLink}
          to={`/${item}`}
          sx={{
            color: "#9b9b9b",
            fontWeight: 500,
            cursor: "pointer",
            transition: ".2s",

            "&:hover": {
              color: "#fff",
            },
            textDecoration : 'none'
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
        width: {
          xs: 45,
          sm: 220,
          md: 310,
        },

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
          display: {
            xs: "none",
            sm: "block",
          },
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: "#6d6d74",
                }}
              />
            </InputAdornment>
          ),
        },
      }}
    />


    {/* Icons */}

    <IconButton
      sx={{
        ml: { xs: 0.5, sm: 2 },
        color:"#bdbdbd",
      }}
    >
      <NotificationsNoneIcon />
    </IconButton>


    <IconButton
      sx={{
        color:"#bdbdbd",
      }}
    >
      <PersonIcon />
    </IconButton>


    {/* Sign in */}

    <Button
      sx={{
        display:{
          xs:"none",
          sm:"block",
        },
        color:"#d6d6d6",
        textTransform:"none",
        ml:1,
        fontWeight:600,
      }}
    >
      Sign in
    </Button>


    {/* Join */}

    <Button
      variant="contained"
      sx={{
        ml:{ xs:0.5, sm:2 },
        bgcolor:"#f6b10a",
        color:"#111",
        textTransform:"none",
        fontWeight:700,
        px:{
          xs:1.5,
          sm:3,
        },
        borderRadius:"10px",

        "&:hover":{
          bgcolor:"#e6a307",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          display:{
            xs:"none",
            sm:"inline",
          }
        }}
      >
        Join Mivo
      </Box>

      <Box
        component="span"
        sx={{
          display:{
            xs:"inline",
            sm:"none",
          }
        }}
      >
        Join
      </Box>
    </Button>

  </Toolbar>
</AppBar>
  );
}