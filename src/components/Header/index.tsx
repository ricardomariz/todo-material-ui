import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

import "./styles.scss";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <header className="header">
      <Container className="header-container" maxWidth="md" fixed>
        <h1>Todo List</h1>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create Todo
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Create Todo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Type anything you want to add as your new todo.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="todo"
              label="New todo"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </header>
  );
}
