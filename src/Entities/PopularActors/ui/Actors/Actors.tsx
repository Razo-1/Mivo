import { Container } from "@mui/material";
import { ActorCard } from "./ActorCard";
import { Represent } from "./Represent";


function Actors() {
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
        <Represent/>
        <ActorCard/>
    </Container>
  );
}

export { Actors };