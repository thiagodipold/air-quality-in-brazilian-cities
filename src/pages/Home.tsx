import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import { IDataResponse } from "../interfaces/api.interfaces";
import { getApi } from "../services/axios.service";

const Home = () => {
  const [cityInfos, setCityInfos] = useState<IDataResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .all([
        getApi<IDataResponse>("sao-paulo"),
        getApi<IDataResponse>("santos"),
      ])
      .then(
        axios.spread((...responses: IDataResponse[]) => {
          setCityInfos(responses);
        })
      )
      .catch((error) => {
        throw new Error("Deu ruim na requisição " + error);
      })
      .finally(() => setLoading(false));
  }, []);

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

      <Grid container spacing={2}>
        {!!cityInfos?.length &&
          cityInfos.map((cityInfo, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CityCard
                city={cityInfo.data.city.name}
                airQuality={cityInfo.data.iaqi.pm25.v}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
