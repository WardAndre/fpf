import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AddButton({ handleClickModalOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip
        arrow
        placement="top"
        TransitionComponent={Zoom}
        title="Adicionar novo usuário"
      >
        <Fab color="primary" variant="extended" onClick={handleClickModalOpen}>
          <PersonAddIcon className={classes.extendedIcon} />
          Adicionar
        </Fab>
      </Tooltip>
    </div>
  );
}
