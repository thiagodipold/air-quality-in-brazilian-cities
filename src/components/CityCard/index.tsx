import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import InformationDialog from "../InformationDialog";
import { CustomCard } from "./style";

const backgroundColor = {
  Boa: "#009966",
  Moderada: "#FFDE33",
  Ruim: "#FF9933",
  "Muito Ruim": "#CC0033",
  Péssima: "#660099",
};

interface ICityCard {
  city: string;
  airQuality: number;
}
const CityCard: React.FC<ICityCard> = ({ airQuality, city }) => {
  const [nivel, setNivel] = useState("");
  const [open, setOpen] = useState(false);

  const nivelByAirQuality = (): string => {
    switch (!!airQuality) {
      case airQuality <= 40:
        return "Boa";
      case airQuality >= 41 && airQuality <= 80:
        return "Moderada";
      case airQuality >= 81 && airQuality <= 120:
        return "Ruim";
      case airQuality >= 121 && airQuality <= 200:
        return "Muito Ruim";
      case airQuality > 200:
        return "Péssima";
      default:
        return "";
    }
  };

  useEffect(() => {
    setNivel(nivelByAirQuality());
  }, []);

  return (
    <>
      <CustomCard backgroundColor={backgroundColor[nivel]}>
        <CardContent>
          <Typography
            align="center"
            component="h3"
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            {city}
          </Typography>
          <Typography align="center" variant="h4" component="h4">
            {airQuality}
          </Typography>
          <Typography align="center" color="text.secondary">
            {nivel}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box display="flex" width="100%" justifyContent="end">
            <Button
              onClick={() => setOpen(true)}
              variant="outlined"
              color="info"
              size="small"
            >
              Saiba mais
            </Button>
          </Box>
        </CardActions>
      </CustomCard>

      <InformationDialog
        city={city}
        airQuality={airQuality}
        nivel={nivel}
        open={open}
        handleClose={() => setOpen(false)}
        appBarBackground={backgroundColor[nivel]}
      />
    </>
  );
};

export default CityCard;
