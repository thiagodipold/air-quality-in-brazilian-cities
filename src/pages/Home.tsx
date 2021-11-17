import { useEffect, useState } from "react";

import { Box, Grid, Skeleton, Typography } from "@material-ui/core";
import CityCard from "../components/CityCard";

import { cities } from "../constants/city";

import axios from "axios";

import { IDataResponse } from "../interfaces/api.interfaces";

import { getApi } from "../services/axios.service";

const Home: React.FC = () => {
  const [cityInfos, setCityInfos] = useState<IDataResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const citiesMapped = (): Promise<IDataResponse>[] => {
    const mapCities: Promise<IDataResponse>[] = [];
    cities.forEach((city) => {
      mapCities.push(getApi<IDataResponse>(city));
    });
    return mapCities;
  };

  useEffect(() => {
    axios
      .all(citiesMapped())
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
        {!loading && !!cityInfos?.length ? (
          cityInfos.map(
            (cityInfo, index) =>
              cityInfo.data?.iaqi?.pm25?.v && (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <CityCard
                    city={cityInfo.data.city.name}
                    airQuality={cityInfo.data.iaqi.pm25.v}
                  />
                </Grid>
              )
          )
        ) : (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <Box mx="auto" mt="15px">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={130}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mx="auto" mt="15px">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={130}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mx="auto" mt="15px">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={130}
                />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Home;
