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
import { useTodos } from "../../hooks/useTodos";

import "./styles.scss";

export function Header() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const { createTodo } = useTodos();

  function handleCreateTodo() {
    if (text) {
      const newTodo = {
        id: Math.random(),
        isCompleted: false,
        date: new Intl.DateTimeFormat("pt-br").format(new Date()),
        text,
      };
      createTodo(newTodo);
      handleClose();
      setText("");
    }
  }

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
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreateTodo} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </header>
  );
}
