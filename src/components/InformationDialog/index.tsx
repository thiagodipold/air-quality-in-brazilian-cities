import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import * as React from "react";

import { Close } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IInformationDialog {
  open: boolean;
  handleClose: () => void;
  city: string;
  nivel: string;
  airQuality: number;
  appBarBackground: string;
}

const airQualityTexts = {
  Boa: "Lorem ipsum",
  Moderada:
    "Pessoas de grupos sensíveis (crianças, idosos e pessoas com doenças respiratórias e cardíacas) podem apresentar sintomas como tosse seca e cansaço. A população, em geral, não é afetada.",
  Ruim: "Toda a população pode apresentar sintomas como tosse seca, cansaço, ardor nos olhos, nariz e garganta. Pessoas de grupos sensíveis (crianças, idosos e pessoas com doenças respiratórias e cardíacas) podem apresentar efeitos mais sérios na saúde.",
  "Muito Ruim":
    "Toda a população pode apresentar agravamento dos sintomas como tosse seca, cansaço, ardor nos olhos, nariz e garganta e ainda falta de ar e respiração ofegante. Efeitos ainda mais graves à saúde de grupos sensíveis (crianças, idosos e pessoas com doenças respiratórias e cardíacas).",
  Péssima:
    "Toda a população pode apresentar sérios riscos de manifestações de doenças respiratórias e cardiovasculares. Aumento de mortes prematuras em pessoas de grupos sensíveis.",
};

const InformationDialog: React.FC<IInformationDialog> = ({
  open,
  handleClose,
  city,
  nivel,
  airQuality,
  appBarBackground,
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography>{city}</Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Box
          marginTop="15px"
          marginBottom="30px"
          mx="auto"
          py="10px"
          maxWidth="120px"
          bgcolor={appBarBackground}
        >
          <Typography align="center" variant="h4" component="h4">
            {airQuality}
          </Typography>
          <Typography align="center">{nivel}</Typography>
        </Box>

        <Typography align="center" variant="body2">
          {airQualityTexts[nivel]}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default InformationDialog;
