"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import UserCard from "@/components/card";
import AddButton from "@/components/add-button";
import AddModal from "@/components/add-modal";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SecurityIcon from "@material-ui/icons/Security";
import PeopleIcon from "@material-ui/icons/People";
import logo from "/public/logo.png";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logo: {
    marginRight: theme.spacing(3),
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [userList, setUserList] = React.useState([
    {
      foto: null,
      nome: "André",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "André",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "André",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "André",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "José",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "Joe",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
    {
      foto: null,
      nome: "Mario",
      idade: "36",
      cpf: "22222222222",
      email: "andre@email.com",
      telefone: "99999-9999",
      genero: "masculino",
      endereco: "Rua das pedras, 22",
      nascimento: "30/12/1987",
      status: "Ativado",
    },
  ]);

  const iconToRender = {
    Clubes: <SecurityIcon />,
    Campeonatos: <SportsSoccerIcon />,
    Jogadores: <PeopleIcon />,
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSave = (userObj) => {
    setUserList([userObj]);
    setModalOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Image
            priority
            className={classes.logo}
            src={logo}
            width={50}
            height={50}
            alt="Federação Paulista de Futebol"
          />
          <Typography variant="h6">Federação Paulista de Futebol</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Campeonatos", "Clubes", "Jogadores"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconToRender[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <AddModal
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          handleModalSave={handleModalSave}
        />
        <div>
          <AddButton handleClickModalOpen={handleClickModalOpen} />
        </div>
        <div className={classes.cardsContainer}>
          {userList.map((user) => (
            <UserCard key={user.cpf} userInfo={user} />
          ))}
        </div>
      </main>
    </div>
  );
}
