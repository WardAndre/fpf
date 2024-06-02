import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "20px",
    margin: "10px",
  },
});

export default function UserCard({ userInfo }) {
  const classes = useStyles();

  const {
    foto,
    nome,
    idade,
    cpf,
    email,
    telefone,
    genero,
    endereco,
    nascimento,
    status,
  } = userInfo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="User image"
          height="140"
          image={foto}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nome}, {idade}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            CPF: {cpf}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            E-mail: {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Telefone: {telefone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Endereço: {endereco}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Nascimento: {nascimento}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gênero: {genero}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
}
