import { useEffect } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Container
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import { actorThunk } from "../../model";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";

function Actors() {
  const dispatch = useAppDispatch();

  const { actors } = useAppSelector(state => state.actorsData)

  useEffect(() => {
    dispatch(actorThunk());
  }, [dispatch]);

  console.log(actors);
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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

      <Box
  sx={{
    display: "flex",
    gap: 3,
    overflowX: "auto",
    pb: 2,
    "&::-webkit-scrollbar": {
      height: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(255,255,255,0.1)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255,255,255,0.3)",
      borderRadius: "3px",
    },
  }}
>
        {actors.map((actor: any) => (
          <Box
            key={actor.id}
            sx={{
              minWidth: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                mb: 2,
              }}
            >
              <Avatar
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : ""
                }
                sx={{
                  width: 130,
                  height: 130,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              />

              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <FavoriteBorder
                  sx={{
                    color: "white",
                    fontSize: 18,
                  }}
                />
              </IconButton>
            </Box>

            <Typography
              sx={{
                color: "#FFD700",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              {Math.floor(actor.popularity)}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
              }}
            >
              ({Math.round(actor.popularity)})
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              {actor.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export { Actors };