import { Grid, Typography } from "@material-ui/core";
import CityCard from "../components/CityCard";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom color="#44c287" variant="h4" component="h1">
            ar da minha cidade
          </Typography>
          <Typography paragraph variant="body1">
            Clique em alguma cidade para ver mais detalhes sobre a qualidade do
            ar e seu impacto na saúde.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <CityCard city="São Paulo" airQuality={100} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
