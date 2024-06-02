import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

export default function AddModal({
  modalOpen,
  handleModalClose,
  handleModalSave,
}) {
  const [userObj, setUserObj] = React.useState({
    foto: null,
    nome: "",
    idade: "",
    cpf: "",
    email: "",
    telefone: "",
    genero: "",
    endereco: "",
    nascimento: "",
    status: "Ativado",
  });

  const genderOptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  const handleChangeUserInfo = (event) => {
    setUserObj({ ...userObj, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Adicionar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para adicionar um usuário preencha as informações e clique em salvar
          </DialogContentText>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="foto"
            label="Foto"
            type="file"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            type="text"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="idade"
            label="Idade"
            type="number"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF"
            type="number"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone"
            type="tel"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            margin="dense"
            id="genero"
            label="Gênero"
            select
            onChange={(event) => handleChangeUserInfo(event)}
          >
            {genderOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="endereco"
            label="Endereço"
            type="text"
            onChange={(event) => handleChangeUserInfo(event)}
          />
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="nascimento"
            label="Nascimento"
            type="date"
            onChange={(event) => handleChangeUserInfo(event)}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => handleModalSave(userObj)} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
