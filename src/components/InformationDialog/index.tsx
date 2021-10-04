import React from "react";

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
import { Close } from "@material-ui/icons";

import { airQualityTexts } from "../../constants/city";

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
